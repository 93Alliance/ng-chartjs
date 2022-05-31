import { NgModule, ModuleWithProviders, Optional, SkipSelf, Injectable } from '@angular/core';
import { ChartComponentLike } from 'chart.js';
import { NgChartjsDirective } from './ng-chartjs.directive';
import { NgChartjsService } from './ng-chartjs.service';
import { NgChartjsCustomPluginConfig } from './plugins-config';

@NgModule({
  imports: [],
  declarations: [NgChartjsDirective],
  exports: [NgChartjsDirective],
  providers: [NgChartjsService]
})
export class NgChartjsModule {
  /**
   * Register a plugin.
   * @param plugins
   */
  public static registerPlugin(plugins: ChartComponentLike[] = []): ModuleWithProviders<NgChartjsModule> {
    const config = new NgChartjsCustomPluginConfig();
    config.plugins = plugins;

    return {
      ngModule: NgChartjsModule,
      providers: [
        {
          provide: NgChartjsCustomPluginConfig,
          useValue: config
        }
      ]
    };
  }
}
