import { NgModule } from '@angular/core';

import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatTreeModule } from '@angular/material/tree';

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
