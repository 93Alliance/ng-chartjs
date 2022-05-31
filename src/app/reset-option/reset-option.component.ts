import { NgChartjsService } from 'ng-chartjs';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';

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
  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: 'black' }
      },
      x: {
        ticks: { color: 'black' },
        grid: {
          color: 'rgba(0, 0, 0, 0)', // 隐藏x轴方向轴线
        }
      }
    }
  };
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  resetOption: any;
  constructor(private ngChartjsService: NgChartjsService) { }

  ngOnInit() {
  }

  changeOption() {
    this.resetOption = {
      scales: {
        x: {
          ticks: { color: 'red' }
        }
      }
    };
  }
  getChartInstance() {
    const chart: any = this.ngChartjsService.getChart('testChart');
    console.log(chart);
    chart.update();
  }
}
