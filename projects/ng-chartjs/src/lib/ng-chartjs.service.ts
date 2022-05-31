import { Injectable } from '@angular/core';
import { Chart } from 'chart.js';
import { NgChartjsCustomPluginConfig } from './plugins-config';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class NgChartjsService {
  constructor(
    private storeService: StoreService,
    private pluginConfig: NgChartjsCustomPluginConfig) {
    if (pluginConfig.plugins.length !== 0) {
      Chart.register(...pluginConfig.plugins);
    }
  }
  // get chart instance by id
  getChart(id: string): any {
    return this.storeService.getChart(id);
  }
}

/**
 * 深复制一个json对象
 * @source 需要深复制的对象
 */
export function deepCopyJson(source: any): any {
  if (!source || typeof source !== 'object') {
    return source;
  }
  const newObj = source.constructor === Array ? [] : {};
  for (const key in source) {
    if (typeof source[key] === 'object') {
      // @ts-ignore
      newObj[key] = deepCopyJson(source[key]);
    } else {
      // @ts-ignore
      newObj[key] = source[key];
    }
  }
  return newObj;
}

/**
* 合并json对象,遇到相同元素级属性，以source为准
* @source 被合并的json对象
* @dest json对象，将此json的属性递归赋值给source
*/
export function mergeJson(source: any, dest: any): Object {
  if (!dest) {
    return source;
  }
  source = source || {};
  for (const key of Object.keys(dest)) {
    if (source[key] === undefined) {
      source[key] = deepCopyJson(dest[key]);
      continue;
    }
    // 冲突了，如果是Object，看看有么有不冲突的属性
    // 不是Object 则以main为主，忽略即可。故不需要else
    if (isJson(dest[key])) {
      // arguments.callee 递归调用，并且与函数名解耦
      mergeJson(source[key], dest[key]);
    }
  }
  return source;
}

/**
* 是否是json对象
* @target 需要被判断的类型
*/
export function isJson(target: any): boolean {
  if (target === null || target === undefined) { return false; }
  return typeof target === 'object' && target.constructor === Object;
}