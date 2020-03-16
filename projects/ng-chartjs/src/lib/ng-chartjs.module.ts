import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { NgChartjsDirective } from './ng-chartjs.directive';
import { NgChartjsCustomPluginToken } from './plugin-token';
import { PluginConfig } from './plugins-config';
import { NgChartjsService } from './ng-chartjs.service';

export function ngChartjsCustomPluginsFactory(plugins: any[]): PluginConfig {
  const pluginConfig = new PluginConfig();
  pluginConfig.plugins = plugins;
  return pluginConfig;
}

@NgModule({
  imports: [],
  declarations: [NgChartjsDirective],
  exports: [NgChartjsDirective],
  providers: [NgChartjsService]
})
export class NgChartjsModule {
  constructor(@Optional() @SkipSelf() ngChartjsModule: NgChartjsModule) {
    if (ngChartjsModule) {
      throw new TypeError(`NgChartjsModule is imported twice.`);
    }
  }
  /**
   * Register a plugin.
   * @param plugin
   */
  public static registerPlugin(plugins: any[] = []): ModuleWithProviders<NgChartjsModule> {
    return {
      ngModule: NgChartjsModule,
      providers: [
        {
          provide: NgChartjsCustomPluginToken,
          useValue: plugins
        },
        {
          deps: [NgChartjsCustomPluginToken],
          provide:  PluginConfig,
          useFactory: ngChartjsCustomPluginsFactory
        }
      ]
    };
  }
  /**
   * Lazy module
   */
  public static forChild(): ModuleWithProviders<NgChartjsModule> {
    return { ngModule: NgChartjsModule };
  }
}
