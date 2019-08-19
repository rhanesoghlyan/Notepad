import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StatisticalAnalysisRoutingModule} from './statistical-analysis-routing.module';
import {StatisticalAnalysisComponent} from './components/root/statistical-analysis.component';

@NgModule({
  declarations: [StatisticalAnalysisComponent],
  imports: [
    CommonModule,
    StatisticalAnalysisRoutingModule
  ]
})
export class StatisticalAnalysisModule {
}
