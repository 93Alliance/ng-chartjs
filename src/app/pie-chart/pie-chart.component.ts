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
  public pieChartType = 'pie';

  pieColors = [
    {
      'backgroundColor': [
        'rgba(63,81,181,0.6)',
        'rgba(233,30,99,0.6)',
        'rgba(156,39,176,0.6)'
      ],
      'borderColor': [
        '#fff',
        '#fff',
        '#fff',
      ],
      'pointBackgroundColor': [
        'rgba(63,81,181,1)',
        'rgba(233,30,99,1)',
        'rgba(156,39,176,1)'
      ],
      'pointBorderColor': [
        '#fff',
        '#fff',
        '#fff'
      ],
      'pointHoverBackgroundColor': [
        'rgba(63,81,181,1)',
        'rgba(233,30,99,1)',
        'rgba(156,39,176,1)'
      ],
      'pointHoverBorderColor': [
        'rgba(63,81,181,1)',
        'rgba(233,30,99,1)',
        'rgba(156,39,176,1)'
      ]
    }
  ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  ngOnInit() {
  }

}
