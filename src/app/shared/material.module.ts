import { NgModule } from '@angular/core';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';

@NgModule({
  exports: [
    MatAutocompleteModule,       // 可以自动补全的input输入框模块
    MatBadgeModule,              // 徽章模块
    MatBottomSheetModule,        // 窗口底部弹窗
    MatButtonModule,             // 所有Material按钮
    MatButtonToggleModule,       // 按钮的toggle模块
    MatCardModule,               // 卡片模块
    MatCheckboxModule,           // 复选框控件
    MatChipsModule,              // chip按钮
    MatDatepickerModule,         // 日期选择控件
    MatDialogModule,             // 弹出窗口控件
    MatDividerModule,            // 分割线控件
    MatExpansionModule,          // 可伸缩的按钮
    MatGridListModule,           // 网格列表
    MatIconModule,               // 图标控件
    MatInputModule,              // 输入框控件
    MatListModule,               // 列表控件
    MatMenuModule,               // 菜单控件
    MatNativeDateModule,         // MatDatepickerModule模块依赖此模块
    MatPaginatorModule,          // 分页模块,一般用于table
    MatProgressBarModule,        // 长条形进度条模块
    MatProgressSpinnerModule,    // 圆形旋转样式的进度条
    MatRadioModule,              // Radio button 控件
    MatRippleModule,             // 水波纹效果控件
    MatSelectModule,             // input选择控件
    MatSidenavModule,            // 侧边栏控件
    MatSliderModule,             // 滑块控件
    MatSlideToggleModule,        // 滑动切换控件
    MatSnackBarModule,           // 底部或顶部弹出提示框控件
    MatSortModule,               // 用于table的sort指令模块
    MatStepperModule,            // 步骤控件
    MatTableModule,              // 表格控件
    MatTabsModule,               // tab切换控件
    MatToolbarModule,            // 顶部title部分的工具栏
    MatTooltipModule,            // 提示工具
    MatTreeModule                // 目录树结构控件
  ]
})
export class MaterialModule { }
