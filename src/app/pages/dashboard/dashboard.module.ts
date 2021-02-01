import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { iconsPathFactory, TUI_ICONS_PATH, TuiScrollbarModule, TuiExpandModule, TuiCalendarModule } from '@taiga-ui/core';
import { TuiBadgeModule, TuiTabsModule } from '@taiga-ui/kit';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import { TuiLineChartModule, TuiAxesModule, TuiBarChartModule, TuiRingChartModule, TuiLegendItemModule } from '@taiga-ui/addon-charts';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TuiBadgeModule,
    TuiScrollbarModule,
    TuiTabsModule,
    TuiAxesModule,
    TuiLineChartModule,
    TuiBarChartModule,
    TuiRingChartModule,
    TuiCalendarModule,
    TuiExpandModule,
    TuiLegendItemModule,
    TuiMoneyModule
  ],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: iconsPathFactory('assets/taiga-ui/icons/'),
    },
  ],
})
export class DashboardModule { }
