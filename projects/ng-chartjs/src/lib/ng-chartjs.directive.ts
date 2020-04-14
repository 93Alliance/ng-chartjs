import {
  OnDestroy,
  OnInit,
  OnChanges,
  EventEmitter,
  ElementRef,
  Input,
  Output,
  SimpleChanges,
  Directive
} from '@angular/core';
import * as Chart from 'chart.js';
import { StoreService } from './store.service';
import { NgChartjsService } from './ng-chartjs.service';
import { getColors, Colors } from './colors';

export type Labels = Array<string | string[] | number | number[] | Date | Date[] | any | any[]>;
export type Orientation = 'oldest' | 'latest';
export interface NgChartjsEvent { event: MouseEvent; active: Array<{}>; }

/* tslint:disable-next-line */
@Directive({ selector: 'canvas[ngChartjs]', exportAs: 'ngChartjs' })
export class NgChartjsDirective implements OnDestroy, OnChanges, OnInit {

  // 图表的点集，它应该是数组<number []>仅用于线，条和雷达，否则数字[];
  @Input() data: number[] | any[];
  // 相当于chart.js内 data: {datasets: [{...}]}
  @Input() datasets: Chart.ChartDataSets[];
  // x轴标签。这对图表来说是必要的：线，条和雷达。并且只是图表的标签（悬停）：polarArea，pie和doughnut
  @Input() labels: Labels = [];
  // 相当于chart.js的option
  @Input() options: Chart.ChartOptions = {};
  // 内联插件属性
  @Input() inlinePlugins: any[];
  // chartType line, bar, radar, pie, polarArea, doughnut
  @Input() chartType: Chart.ChartType;
  // 数据颜色，如果没有指定，将使用默认和|或随机颜色
  @Input() colors: Colors[];
  // 是否显示图例
  @Input() legend: boolean;

  @Input() adding: { labels: Labels[], data: any[][] };
  @Input() removing: { orientation: Orientation };  // orientation is 'oldest' or 'latest
  @Input() resetOption: Chart.ChartType;

  // 鼠标点击图表所有的区域
  @Output() chartClick: EventEmitter<NgChartjsEvent> = new EventEmitter();
  // 鼠标悬浮在标签或者活跃的点上面时
  @Output() chartHover: EventEmitter<NgChartjsEvent> = new EventEmitter();

  // get Chartjs object
  chart: Chart;
  private ctx: CanvasRenderingContext2D;
  private initFlag = false;
  private hasChanges = false;

  private element: ElementRef;

  public constructor(element: ElementRef,
    private ngChartjsService: NgChartjsService,
    private storeService: StoreService) {
    this.element = element;   // 获取指令所在canvas元素
  }

  ngOnInit(): void {
    this.ctx = this.element.nativeElement.getContext('2d'); // 获取元素的ctx
    this.initFlag = true; // 是否初始化了的标志

    if (this.data || this.datasets) { // 判断data和datasets有一个有数据就刷新
      this.refresh();
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
          this.chart.options.legend.display = changes.legend.currentValue;
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
        Object.assign(this.chart.options, changes.resetOption.currentValue);
        this.hasChanges = true;
      }

      if (this.hasChanges) {
        this.chart.update();
        this.hasChanges = false;
      }
    }
  }

  ngOnDestroy(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;

      if (this.element.nativeElement.hasAttribute('id')) {
        this.storeService.removeChart(this.element.nativeElement.id);  // delete chart instance.
      }
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
    if (this.element.nativeElement.hasAttribute('id')) {
      this.storeService.addChart(this.element.nativeElement.id, this.chart);
    }
  }

  private updateChartData(newDataValues: number[] | any[]): void {
    if (Array.isArray(newDataValues[0].data)) {
      this.chart.data.datasets.forEach((dataset: Chart.ChartDataSets, i: number) => {
        dataset.data = newDataValues[i].data;

        if (newDataValues[i].label) {
          dataset.label = newDataValues[i].label;
        }
      });
    } else {
      this.chart.data.datasets[0].data = newDataValues;
    }
    // update colors
    this.chart.data.datasets = this.updateColors(this.chart.data.datasets);
  }

  private getChartBuilder(ctx: CanvasRenderingContext2D/*, data:Array<any>, options:any*/): Chart {
    const datasets = this.getDatasets();

    const options: Chart.ChartOptions = Object.assign({}, this.options); // 深复制options
    if (this.legend === false) {  // 设置options的legend TODO: 后续这个属性去除，直接在options内设置
      options.legend = { display: false };
    }
    // hock for onHover and onClick events
    options.hover = options.hover || {};
    if (!options.hover.onHover) {
      options.hover.onHover = (event: MouseEvent, active: Array<{}>) => {
        if (active && !active.length) {
          return;
        }
        this.chartHover.emit({ event, active });
      };
    }

    if (!options.onClick) {
      options.onClick = (event: MouseEvent, active: Array<{}>) => {
        this.chartClick.emit({ event, active });
      };
    }

    const opts = {
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
  private getDatasets(): Chart.ChartDataSets[] {
    let datasets: Chart.ChartDataSets[] = void 0;
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
  private updateColors(datasets: Chart.ChartDataSets[]): Chart.ChartDataSets[] {
    if (this.datasets && this.datasets.length || (datasets && datasets.length)) {
      // fix elm type, pre type is number
      datasets = (this.datasets || datasets).map((elm: Chart.ChartDataSets, index: number) => {
        const newElm: Chart.ChartDataSets = Object.assign({}, elm);
        if (this.colors && this.colors.length) {
          Object.assign(newElm, this.colors[index]);
        } else {
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
    labels.forEach((label) => { this.chart.data.labels.push(label); });

    this.chart.data.datasets.forEach((dataset, index) => {
      if (data[index]) {
        for (let i = 0; i < data[index].length; i++) {
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
      this.chart.data.labels.pop();
      this.chart.data.datasets.forEach((dataset: Chart.ChartDataSets) => {
        dataset.data.pop();
      });
    } else if (orientation === 'oldest') {
      this.chart.data.labels.shift();
      this.chart.data.datasets.forEach((dataset: Chart.ChartDataSets) => {
        dataset.data.shift();
      });
    }
  }
}
