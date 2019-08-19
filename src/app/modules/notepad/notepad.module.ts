import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {NoteFieldComponent} from './components/note-field/note-field.component';
import {NotepadComponent} from './components/root/notepad.component';
import {NotepadRoutingModule} from './notepad-routing.module';

@NgModule({
  declarations: [
    NotepadComponent,
    NoteFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotepadRoutingModule
  ]
})
export class NotepadModule {
}
