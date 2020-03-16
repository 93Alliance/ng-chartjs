import { NgChartjsModule } from 'ng-chartjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }


@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    NgChartjsModule
  ]
})
export class LazyModuleModule { }
