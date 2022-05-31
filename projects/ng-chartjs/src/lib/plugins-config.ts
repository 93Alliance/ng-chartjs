import { Injectable } from '@angular/core';
import { ChartComponentLike } from 'chart.js/auto';

@Injectable({
    providedIn: 'root'
})
export class NgChartjsCustomPluginConfig {
    plugins: ChartComponentLike[] = [];
}

