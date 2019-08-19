import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/notepad',
    pathMatch: 'full'
  },
  {
    path: 'notepad',
    loadChildren: './modules/notepad/notepad.module#NotepadModule',
  },
  {
    path: 'statistical-analysis',
    loadChildren: './modules/statistical-analysis/statistical-analysis.module#StatisticalAnalysisModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
