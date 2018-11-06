import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

   // lineChart
   lineChartData: Array<any> = [
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
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  updateData: any;
  isUpdate: boolean;
  removing: any;
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
    this.updateData = {labels: ['August', 'September'], data: [[10, 30, 47], [50, 69, 58]]};
  }

  removeData() {
    this.removing = {orientation: 'latest'};
  }
  toggleLegend() {
    this.lineChartLegend = !this.lineChartLegend;
  }
}
