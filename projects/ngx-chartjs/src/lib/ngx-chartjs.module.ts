import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { NgxChartjsDirective } from './ngx-chartjs.directive';
import { RegisterPluginService } from './register-plugin.service';
import { NgxChartjsPluginToken } from './plugin-token';

// import { Chart } from 'chart.js';



// export const NgxChartjsPluginConfigToken: InjectionToken<any[]>
//   = new InjectionToken<any[]>('[ngx-chart-js] Global Plugin Config');

// export function NgxChartjsPluginFactory(plugins: any[]): any {
//   return () => new RegisterPluginService(plugins);
// }

// export function NgxChartjsPluginFactory(plugins: any[]): any {
//   if (plugins.length !== 0 || plugins) {
//     for (let i = 0; i < plugins.length; i++) {
//       Chart.plugins.register(plugins[i]);
//     }
//   }
// }

@NgModule({
  imports: [
  ],
  declarations: [NgxChartjsDirective],
  exports: [NgxChartjsDirective],
  providers: [RegisterPluginService]
})
export class NgxChartjsModule {
  /**
   * Register a plugin.
   * @param plugin
   */
  public static registerPlugin(plugins: any[] = []): ModuleWithProviders {
    return {
      ngModule: NgxChartjsModule,
      providers: [
        {
          provide: NgxChartjsPluginToken,
          useValue: plugins
        }
      ]
    };
  }
}
