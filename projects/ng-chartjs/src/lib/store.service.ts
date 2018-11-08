import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _chartInstances: any[] = [];
  private _chartId: string[] = [];

  addChart(id: string, chart: any): void {
    for (let i = 0; i < this._chartId.length; i++) {
      if (id === this._chartId[i]) {
        return;
      }
    }
    this._chartId.push(id);
    this._chartInstances.push(chart);
  }

  removeChart(id: string): void {
    for (let i = 0; i < this._chartId.length; i++) {
      if (id === this._chartId[i]) {
        this._chartId.splice(i, 1);
        this._chartInstances.splice(i, 1);  // delete chart instance.
      }
    }
  }

  getChart(id: string): any {
    for (let i = 0; i < this._chartId.length; i++) {
      if (id === this._chartId[i]) {
        return this._chartInstances[i];
      }
    }
    return null;
  }
}
