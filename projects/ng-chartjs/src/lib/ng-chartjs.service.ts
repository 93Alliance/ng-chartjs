import { Injectable, Inject, forwardRef } from '@angular/core';
import { Chart } from 'chart.js';
import { NgChartjsCustomPluginToken } from './plugin-token';
import { PluginConfig } from './plugins-config';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class NgChartjsService {

    private plugins: any[];

    constructor(@Inject(forwardRef(() => NgChartjsCustomPluginToken)) private pluginConfig: PluginConfig,
    private storeService: StoreService) {
      this.plugins = pluginConfig.plugins;
      if (this.plugins.length !== 0 || this.plugins) {
        for (let i = 0; i < this.plugins.length; i++) {
          if (this.plugins[i]) {
            Chart.plugins.register(this.plugins[i]);
          }
        }
      }
    }
    // get chart instance by id
    getChart(id: string): any {
      return this.storeService.getChart(id);
    }
}
