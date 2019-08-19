import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {StatisticalAnalysisComponent} from './components/root/statistical-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticalAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticalAnalysisRoutingModule {
}
