import { NgModule } from '@angular/core';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
