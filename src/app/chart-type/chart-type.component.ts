import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-type',
  templateUrl: './chart-type.component.html',
  styleUrls: ['./chart-type.component.css']
})
export class ChartTypeComponent implements OnInit {

  // lineChart
  lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: { beginAtZero: true, fontColor: 'black' },
          gridLines: {
            // color: 'rgba(0, 0, 0, 0)', // 隐藏要y轴轴线
            zeroLineColor: 'black'
          }
        }]
    }
  };
  public lineChartLegend = true;
  public chartType = 'line';

  constructor() { }

  ngOnInit() {
  }

  changeChartType() {
    this.chartType = 'bar';
    this.lineChartData = [
      {
        label: 'name',
        data: [1, 2, 3]
      }
    ];
    this.lineChartLabels = ['newlabel1', 'newlabel2', 'newlabel3'];
  }
}
