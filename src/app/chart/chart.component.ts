import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chart',
  template: `
  <div>
      <canvas [id]="chartId" ngChartjs
        [datasets]="lineChartData"
        [labels]="lineChartLabels"
        [legend]="lineChartLegend"
        [chartType]="lineChartType">
      </canvas>
  </div>
  `,
  styles: [``]
})
export class ChartComponent implements OnInit {
  @Input() chartId = 'chartId';

  lineChartData: Array<any> = [
      {
        label: 'Common Chart',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
  ];
  lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartLegend = true;
  lineChartType: any = 'line';

  ngOnInit() {
  }
}
