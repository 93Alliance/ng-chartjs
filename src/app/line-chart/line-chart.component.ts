import { NgChartjsDirective } from './../../../projects/ng-chartjs/src/lib/ng-chartjs.directive';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  // lineChart
  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  currentLineChartLabelsIdx = 0;
  lineChartLabels: Array<any>;
  lineChartOptions: any = {
    responsive: true
  };
  lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(63,81,181,0.35)',
      borderColor: 'rgba(63,81,181,1)',
      pointBackgroundColor: 'rgba(63,81,181,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(63,81,181,0.95)'
    },
    {
      backgroundColor: 'rgba(0,150,136,0.35)',
      borderColor: 'rgba(0,150,136,1)',
      pointBackgroundColor: 'rgba(0,150,136,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,150,136,0.95)'
    },
    {
      backgroundColor: 'rgba(255,152,0,0.35)',
      borderColor: 'rgba(255,152,0,1)',
      pointBackgroundColor: 'rgba(255,152,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,152,0,0.95)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  updateData: any;
  isUpdate: boolean;
  removing: any;
  @ViewChild('ngChartjs', {static: true})
  private readonly ngChartjs: NgChartjsDirective;
  constructor() { }

  ngOnInit() {
    this.changeLabels();
  }

  changeLabels() {
    if (this.currentLineChartLabelsIdx === 0) {
      this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      this.currentLineChartLabelsIdx = 1;
    } else {
      this.lineChartLabels = ['1', '2', '3', '4', '5', '6', '7'];
      this.currentLineChartLabelsIdx = 0;
    }
  }

  addNewData() {
    this.updateData = { labels: ['August', 'September'], data: [[10, 30], [50, 58], [47, 49]] };
  }

  removeData() {
    this.removing = { orientation: 'latest' };
  }
  toggleLegend() {
    this.lineChartLegend = !this.lineChartLegend;
  }

  // events
  chartClicked(e: any): void {
    console.log('click', e);
  }

  chartHovered(e: any): void {
    // console.log('hover', e);
  }
}
