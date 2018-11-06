import { NgModule, ModuleWithProviders } from '@angular/core';
import { NgChartjsDirective } from './ng-chartjs.directive';
import { RegisterPluginService } from './register-plugin.service';
import { NgChartjsPluginToken } from './plugin-token';

@NgModule({
  imports: [
  ],
  declarations: [NgChartjsDirective],
  exports: [NgChartjsDirective],
  providers: [RegisterPluginService]
})
export class NgChartjsModule {
  /**
   * Register a plugin.
   * @param plugin
   */
  public static registerPlugin(plugins: any[] = []): ModuleWithProviders {
    return {
      ngModule: NgChartjsModule,
      providers: [
        {
          provide: NgChartjsPluginToken,
          useValue: plugins
        }
      ]
    };
  }
}
