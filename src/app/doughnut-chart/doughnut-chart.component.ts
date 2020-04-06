import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType = 'doughnut';

  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public addData(): void {
    this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'google Sales', 'TianMao Sales'];
    this.doughnutChartData = [350, 450, 100, 80, 90];
  }

  constructor() { }

  ngOnInit() {
  }

}
