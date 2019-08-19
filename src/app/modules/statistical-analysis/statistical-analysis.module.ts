import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartModule} from 'angular-highcharts';

import {StatisticalAnalysisRoutingModule} from './statistical-analysis-routing.module';
import {StatisticalAnalysisComponent} from './components/root/statistical-analysis.component';
import {ChartComponent} from './components/chart/chart.component';

@NgModule({
  declarations: [
    StatisticalAnalysisComponent,
    ChartComponent
  ],
  imports: [
    ChartModule,
    CommonModule,
    StatisticalAnalysisRoutingModule
  ]
})
export class StatisticalAnalysisModule {
}
