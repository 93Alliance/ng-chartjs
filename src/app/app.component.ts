import { Component } from '@angular/core';

import { NgChartjsService } from 'ng-chartjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private ngChartjsService: NgChartjsService) {

  }

  public getInstance() {
    const chart1: any = this.ngChartjsService.getChart('test1');
    console.log('test1: ', chart1);
    const chart2: any = this.ngChartjsService.getChart('test2');
    console.log('test2: ', chart2);
  }
}
