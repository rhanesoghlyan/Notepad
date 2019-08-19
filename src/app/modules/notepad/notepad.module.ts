import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NotepadComponent} from './components/root/notepad.component';
import {NotepadRoutingModule} from './notepad-routing.module';

@NgModule({
  declarations: [NotepadComponent],
  imports: [
    CommonModule,
    NotepadRoutingModule
  ]
})
export class NotepadModule {
}
