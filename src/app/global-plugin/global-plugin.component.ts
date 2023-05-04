import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-global-plugin',
  templateUrl: './global-plugin.component.html',
  styleUrls: ['./global-plugin.component.css']
})
export class GlobalPluginComponent implements OnInit {

  // lineChart
  lineChartData: Chart.ChartDataset[] = [
    {
      label: 'My First dataset',
      fill: false,
      tension: 0.1,
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
    responsive: true,
    horizontalLine: [{
      y: 82,
      style: 'rgba(255, 0, 0, .4)',
      text: 'max'
    }, {
      y: 60,
      style: '#00ffff',
    }, {
      y: 44,
      text: 'min'
    }]
  };
  lineChartGlobalPlugin: Chart.ChartOptions = {
    responsive: true,
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            value: 70,
            scaleID: 'y',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            label: {
              backgroundColor: 'red',
              content: 'Target line',
              display: true,
              // enabled: true,
              position: 'center',
              font: {
                weight: 'bold'
              }
            }
          },
          box1: {
            type: 'box',
            xMin: 1,
            xMax: 2,
            yMin: 50,
            yMax: 70,
            backgroundColor: 'rgba(255, 99, 132, 0.25)'
          }
        }
      }
    }
  };
  public lineChartLegend = true;
  public lineChartType: Chart.ChartType = 'line';
  constructor() { }

  ngOnInit() {
  }

}
