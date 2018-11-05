import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgxChartjsDirective } from './ngx-chartjs.directive';

import { Chart } from 'chart.js';

export function NgxChartjsPluginFactory(plugin: any[]): any {
  if (plugin.length === 0 || !plugin) {
    return;
  } else {
    for (let i = 0; i < plugin.length; i++) {
      Chart.plugins.register(plugin[i]);
    }
  }
}


@NgModule({
  imports: [
  ],
  declarations: [NgxChartjsDirective],
  exports: [NgxChartjsDirective]
})
export class NgxChartjsModule {
  /**
   * Register a plugin.
   * @param plugin
   */
  public static registerPlugin(plugin: any[]): ModuleWithProviders {
    return {
      ngModule: NgxChartjsModule,
      providers: [
        {
          provide: NgxChartjsPluginFactory,
          useFactory: NgxChartjsPluginFactory(plugin)
        },
      ]
    };
  }
}
