import { Injectable, Inject, forwardRef } from '@angular/core';
import { Chart } from 'chart.js';
import { NgChartjsCustomPluginToken } from './plugin-token';
import { PluginConfig } from './pluginsConfig';

@Injectable({
  providedIn: 'root'
})
export class RegisterPluginService {
  private plugins: any[];
  constructor(@Inject(forwardRef(() => NgChartjsCustomPluginToken)) private pluginConfig: PluginConfig) {
    this.plugins = pluginConfig.plugins;
    if (this.plugins.length !== 0 || this.plugins) {
      for (let i = 0; i < this.plugins.length; i++) {
        if (this.plugins[i]) {
          Chart.plugins.register(this.plugins[i]);
        }
      }
    }
  }
}
