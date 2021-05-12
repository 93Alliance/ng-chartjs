import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: Chart.ChartType = 'pie';

  pieColors = [
    {
      'backgroundColor': [
        'rgba(63,81,181,0.75)',
        'rgba(0,150,136,0.75)',
        'rgba(255,152,0,0.75)'
      ],
      'borderColor': [
        '#fff',
        '#fff',
        '#fff',
      ],
      'pointBackgroundColor': [
        'rgba(63,81,181,1)',
        'rgba(0,150,136,1)',
        'rgba(255,152,0,1)'
      ],
      'pointBorderColor': [
        '#fff',
        '#fff',
        '#fff'
      ],
      'pointHoverBackgroundColor': [
        'rgba(63,81,181,1)',
        'rgba(0,150,136,1)',
        'rgba(1255,152,0,1)'
      ],
      'pointHoverBorderColor': [
        'rgba(63,81,181,1)',
        'rgba(0,150,136,1)',
        'rgba(255,152,0,1)'
      ]
    }
  ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }
  ngOnInit() {
  }

}
