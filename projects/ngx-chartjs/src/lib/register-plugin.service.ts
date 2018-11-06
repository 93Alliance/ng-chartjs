import { Injectable, Inject, forwardRef } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxChartjsPluginToken } from './plugin-token';

@Injectable({
  providedIn: 'root'
})
export class RegisterPluginService {
    constructor(@Inject( forwardRef(() =>  NgxChartjsPluginToken)) private plugins: any[]) {
      if (this.plugins.length !== 0 || this.plugins) {
        for (let i = 0; i < this.plugins.length; i++) {
          if (this.plugins[i]) {
            Chart.plugins.register(this.plugins[i]);
          }
        }
      }
    }
}
