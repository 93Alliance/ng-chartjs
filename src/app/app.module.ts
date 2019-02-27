import { NgChartjsModule } from './../../projects/ng-chartjs/src/lib/ng-chartjs.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material.module';
import { PluginComponent } from './plugin/plugin.component';
import { GlobalPluginComponent } from './global-plugin/global-plugin.component';

import * as ChartAnnotation from 'chartjs-plugin-annotation';
// import * as PiechartOutlabels from 'chartjs-plugin-piechart-outlabels-compact';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PolarChartComponent } from './polar-chart/polar-chart.component';
import { ResetOptionComponent } from './reset-option/reset-option.component';
import { ChartTypeComponent } from './chart-type/chart-type.component';

const chartAnnotation = ChartAnnotation;
// const piechartOutlabels = PiechartOutlabels;
// chartAnnotation['id'] = 'annotation';
export function horizonalLine(chartInstance) {
  const yScale = chartInstance.scales['y-axis-0'];
  const canvas = chartInstance.chart;
  const ctx = canvas.ctx;
  let index;
  let line;
  let style;
  let yValue;

  if (chartInstance.options.horizontalLine) {
    for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
      line = chartInstance.options.horizontalLine[index];

      if (!line.style) {
        style = 'rgba(169,169,169, .6)';
      } else {
        style = line.style;
      }

      if (line.y) {
        yValue = yScale.getPixelForValue(line.y);
      } else {
        yValue = 0;
      }

      ctx.lineWidth = 3;

      if (yValue) {
        ctx.beginPath();
        ctx.moveTo(0, yValue);
        ctx.lineTo(canvas.width, yValue);
        ctx.strokeStyle = style;
        ctx.stroke();
      }

      if (line.text) {
        ctx.fillStyle = style;
        ctx.fillText(line.text, 0, yValue + ctx.lineWidth);
      }
    }
    return;
  }
}
const horizonalLinePlugin = {
  // id: 'cutomline',
  beforeDraw: horizonalLine
};

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    PluginComponent,
    GlobalPluginComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PolarChartComponent,
    ResetOptionComponent,
    ChartTypeComponent
  ],
  imports: [
    BrowserModule,
    NgChartjsModule.registerPlugin([horizonalLinePlugin, chartAnnotation]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
