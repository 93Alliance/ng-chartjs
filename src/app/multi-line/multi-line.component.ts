import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { deepCopyJson } from 'ng-chartjs';

@Component({
  selector: 'app-multi-line',
  templateUrl: './multi-line.component.html',
  styleUrls: ['./multi-line.component.css']
})
export class MultiLineComponent {

  lineChartData: ChartData['datasets'] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];

  lineChartLegend = true;
  lineChartType: any = 'line';
  lineChartLabels: Array<any> = [];
  lineChartOptions: any = {
    responsive: true
  };
  defaultDatas: ChartData['datasets'] = [];

  constructor() {
    this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
    this.defaultDatas = [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      { data: [18, 48, 77, 9, 100, 27, 54], label: 'Series C' },
      { data: [12, 32, 76, 64, 54, 34, 76], label: 'Series D' },
    ];
  }

  addLine() {
    if (this.lineChartData.length < 4) {
      this.lineChartData.push(this.defaultDatas[this.lineChartData.length]);
      this.lineChartData = deepCopyJson(this.lineChartData);
    }
  }

  removeLine() {
    if (this.lineChartData.length > 1) {
      this.lineChartData.pop();
      this.lineChartData = deepCopyJson(this.lineChartData);
    }
  }
}
