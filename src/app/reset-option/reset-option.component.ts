import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-option',
  templateUrl: './reset-option.component.html',
  styleUrls: ['./reset-option.component.css']
})
export class ResetOptionComponent implements OnInit {

  // lineChart
  lineChartData: Array<any> = [
    {
      label: 'My First dataset',
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
  lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  resetOption: any;
  constructor() { }

  ngOnInit() {
  }
  changeOption() {
    this.resetOption = {
      scales: {
        xAxes: [
          {
            ticks: {fontColor: 'red'}
          }
        ]
      }
    };
  }
}
