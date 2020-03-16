import { Injectable } from '@angular/core';
import * as Chart from 'chart.js';
import { PluginConfig } from './plugins-config';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class NgChartjsService {

    constructor(
      private storeService: StoreService,
      private pluginConfig: PluginConfig) {
      const plugins = pluginConfig.plugins;
      if (plugins.length !== 0 || plugins) {
        for (let i = 0; i < plugins.length; i++) {
          if (plugins[i]) {
            Chart.plugins.register(plugins[i]);
          }
        }
      }
    }
    // get chart instance by id
    getChart(id: string): any {
      return this.storeService.getChart(id);
    }
}
