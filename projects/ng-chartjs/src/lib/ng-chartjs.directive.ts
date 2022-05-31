import {
  OnDestroy,
  OnInit,
  OnChanges,
  EventEmitter,
  ElementRef,
  Input,
  Output,
  SimpleChanges,
  Directive,
  NgZone
} from '@angular/core';
// import { Chart, ChartConfiguration, ChartEvent, DefaultDataPoint, registerables } from 'chart.js';
import Chart, 
{ 
  ChartEvent, 
  ChartConfiguration, 
  ChartOptions, 
  ChartDataset, 
  ChartData 
} from 'chart.js/auto';
import { StoreService } from './store.service';
import { deepCopyJson, mergeJson, NgChartjsService } from './ng-chartjs.service';
import { getColors, Colors } from './colors';

export type Labels = Array<string | string[] | number | number[] | Date | Date[] | any | any[]>;
export type Orientation = 'oldest' | 'latest';
export interface NgChartjsEvent { event: ChartEvent; active: Array<{}>; }

/* tslint:disable-next-line */
@Directive({ selector: 'canvas[ngChartjs]', exportAs: 'ngChartjs' })
export class NgChartjsDirective implements OnDestroy, OnChanges, OnInit {

  // 图表的点集，它应该是数组<number []>仅用于线，条和雷达，否则数字[];
  // @ts-ignore
  @Input() data: number[] | any[];
  // 相当于chart.js内 data: {datasets: [{...}]}
  // @ts-ignore
  @Input() datasets: ChartData['datasets'];
  // x轴标签。这对图表来说是必要的：线，条和雷达。并且只是图表的标签（悬停）：polarArea，pie和doughnut
  @Input() labels: Labels = [];
  // 相当于chart.js的option
  @Input() options?: ChartConfiguration['options'];
  // 内联插件属性
  // @ts-ignore
  @Input() inlinePlugins: any[];
  // chartType line, bar, radar, pie, polarArea, doughnut
  // @ts-ignore
  @Input() chartType: ChartConfiguration['type'];
  // 数据颜色，如果没有指定，将使用默认和|或随机颜色
  // @ts-ignore
  @Input() colors: Colors[];
  // 是否显示图例
  // @ts-ignore
  @Input() legend: boolean;

  // @ts-ignore
  @Input() adding: { labels: Labels[], data: any[][] };
  // @ts-ignore
  @Input() removing: { orientation: Orientation };  // orientation is 'oldest' or 'latest
  // @ts-ignore
  @Input() resetOption: ChartConfiguration['options'];

  @Input() noZone = true; // disable angular NgZone
  // @ts-ignore
  @Input() id: string = null; // chart instance id

  // 鼠标点击图表所有的区域
  @Output() chartClick: EventEmitter<NgChartjsEvent> = new EventEmitter();
  // 鼠标悬浮在标签或者活跃的点上面时
  @Output() chartHover: EventEmitter<NgChartjsEvent> = new EventEmitter();

  // get Chartjs object
  // @ts-ignore
  chart: Chart;
  // @ts-ignore
  private ctx: CanvasRenderingContext2D;
  private initFlag = false;
  private hasChanges = false;

  private element: ElementRef;

  public constructor(
    element: ElementRef,
    private ngChartjsService: NgChartjsService,
    private storeService: StoreService,
    private zone: NgZone) {
    this.element = element;   // 获取指令所在canvas元素
  }

  ngOnInit(): void {
    this.ctx = this.element.nativeElement.getContext('2d'); // 获取元素的ctx
    this.initFlag = true; // 是否初始化了的标志

    if (this.data || this.datasets) { // 判断data和datasets有一个有数据就刷新
      if (this.noZone) {
        this.zone.runOutsideAngular(() => {
         this.refresh();
        });
      } else {
        this.refresh();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // TODO: 插件变化刷新，开放刷新按钮
    if (this.initFlag) {
      // Check if the changes are in the data or datasets
      if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
        if (changes.data) {
          this.updateChartData(changes.data.currentValue);
        } else {
          this.updateChartData(changes.datasets.currentValue);
        }
        this.hasChanges = true;
      }

      if (changes.hasOwnProperty('labels')) {
        this.chart.data.labels = changes.labels.currentValue;
        this.hasChanges = true;
      }

      if (changes.hasOwnProperty('legend')) {
        if (changes.legend.currentValue !== changes.legend.previousValue) {
          // @ts-ignore
          this.chart.options.plugins.legend.display = changes.legend.currentValue;
          this.hasChanges = true;
        }
      }

      if (changes.hasOwnProperty('adding')) {
        this.addData_(changes.adding.currentValue.labels, changes.adding.currentValue.data);
        this.hasChanges = true;
      }

      if (changes.hasOwnProperty('removing')) {
        if (changes.removing.currentValue.orientation === 'oldest' || changes.removing.currentValue.orientation === 'latest') {
          this.removeData_(changes.removing.currentValue.orientation);
          this.hasChanges = true;
        }
      }

      if (changes.hasOwnProperty('chartType')) {
        this.refresh();
      }

      if (changes.hasOwnProperty('resetOption')) {
        const resetOption = deepCopyJson(changes.resetOption.currentValue);
        this.chart.options = mergeJson(resetOption, this.chart.options);
        this.hasChanges = true;
      }

      if (this.hasChanges) {
        this.chart.update();
        this.hasChanges = false;
      }

      // change chart id
      if (changes.hasOwnProperty('id')) {
        this.removeChart(changes.id.previousValue);
        this.addChart(changes.id.currentValue);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
      // @ts-ignore
      this.chart = void 0;

      this.removeChart(this.id);
    }
  }

  // update chartjs
  update(): void {
    this.chart.update();
  }

  // Dynamic add data
  addData(labels: Labels[], data: any[][]): void {
    this.addData_(labels, data);
    this.update();
  }
  // Dynamic remove data, orientation is 'ildest' or 'latest'
  removeData(orientation: Orientation): void {
    this.removeData_(orientation);
    this.update();
  }

  private refresh(): void {
    this.ngOnDestroy();
    this.chart = this.getChartBuilder(this.ctx/*, data, this.options*/);
    this.addChart(this.id);
  }

  private removeChart(id: string): void {
    if (this.element.nativeElement.hasAttribute('id')) {
      this.storeService.removeChart(this.element.nativeElement.id);
      return;
    }
    if (id !== null && id !== undefined) {
      this.storeService.removeChart(id);  // delete chart instance.
    }
  }

  private addChart(id: string): void {
    if (this.element.nativeElement.hasAttribute('id')) {
      this.storeService.addChart(this.element.nativeElement.id, this.chart);
      return;
    }
    if (id !== null && id !== undefined) {
      this.storeService.addChart(id, this.chart);
    }
  }

  private updateChartData(newDataValues: number[] | any[]): void {
    if (Array.isArray(newDataValues[0].data)) {
      // @ts-ignore
      this.chart.data.datasets.forEach((dataset: ChartDataset, i: number) => {
        dataset.data = newDataValues[i].data;

        if (newDataValues[i].label) {
          dataset.label = newDataValues[i].label;
        }
      });
    } else {
      // @ts-ignore
      this.chart.data.datasets[0].data = newDataValues;
    }
    // update colors
    // @ts-ignore
    this.chart.data.datasets = this.updateColors(this.chart.data.datasets);
  }

  private getChartBuilder(ctx: CanvasRenderingContext2D/*, data:Array<any>, options:any*/): Chart {
    const datasets = this.getDatasets();

    let options: ChartOptions = Object.assign({}, this.options); // 深复制options
    mergeJson(options, {
      plugins: {
        legend: {
          display: this.legend
        }
      }
    })

    // hock for onHover and onClick events
    options.hover = options.hover || {};
    if (!options.onHover) {
      options.onHover = (event: ChartEvent, active: Array<{}>) => {
        if (active && !active.length) {
          return;
        }
        this.chartHover.emit({ event, active });
      };
    }

    if (!options.onClick) {
      options.onClick = (event: ChartEvent, active: Array<{}>) => {
        this.chartClick.emit({ event, active });
      };
    }

    const opts: ChartConfiguration = {
      type: this.chartType,
      data: {
        labels: this.labels,
        datasets: datasets   // TODO: 后续更改这个属性名字，否则警告
      },
      options: options,   // TODO: 后续更改这个属性名字，否则警告
      plugins: this.inlinePlugins
    };

    return new Chart(ctx, opts);
  }

  // 获取 chart.js的datasets数据
  private getDatasets(): ChartData['datasets'] {
    // @ts-ignore
    let datasets: ChartData['datasets'] = void 0;
    // in case if datasets is not provided, but data is present
    if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
      if (Array.isArray(this.data[0])) {
        datasets = (this.data as number[][]).map((data: number[], index: number) => {
          return { data, label: this.labels[index] || `Label ${index}` };
        });
      } else {
        datasets = [{ data: this.data, label: `Label 0` }];
      }
    }

    datasets = this.updateColors(datasets); // update colors

    if (!datasets) {
      throw new Error(`ng-chartjs configuration error,
      data or datasets field are required to render char ${this.chartType}`);
    }

    return datasets;
  }

  // update dataset colors
  private updateColors(datasets: ChartData['datasets']): ChartData['datasets'] {
    if (this.datasets && this.datasets.length || (datasets && datasets.length)) {
      // fix elm type, pre type is number
      datasets = (this.datasets || datasets).map((elm: any, index: number) => {
        const newElm = Object.assign({}, elm);
        if (this.colors && this.colors.length) {
          Object.assign(newElm, this.colors[index]);
        } else {
          // @ts-ignore
          Object.assign(newElm, getColors(this.chartType, index, newElm.data.length));
        }
        return newElm;
      });
    }
    return datasets;
  }

  private addData_(labels: Labels[], data: any[][]): void {
    if (labels.length === 0 || data.length === 0) {
      return;
    }
    // update labels
    // @ts-ignore
    labels.forEach((label) => { this.chart.data.labels.push(label); });
    // @ts-ignore
    this.chart.data.datasets.forEach((dataset, index) => {
      if (data[index]) {
        for (let i = 0; i < data[index].length; i++) {
          // @ts-ignore
          dataset.data.push(data[index][i]);
        }
      } else {
        console.log('The added data does not match the original data');
        return;
      }
    });
  }

  private removeData_(orientation: Orientation): void {
    // fix: support to oldest feature
    if (orientation === 'latest') {
      // @ts-ignore
      this.chart.data.labels.pop();
      // @ts-ignore
      this.chart.data.datasets.forEach((dataset: ChartData['datasets']) => {
        // @ts-ignore
        dataset.data.pop();
      });
    } else if (orientation === 'oldest') {
      // @ts-ignore
      this.chart.data.labels.shift();
      // @ts-ignore
      this.chart.data.datasets.forEach((dataset: ChartData['datasets']) => {
        // @ts-ignore
        dataset.data.shift();
      });
    }
  }
}
