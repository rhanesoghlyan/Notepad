import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NoteFormData} from '@core/models/note.models';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.sass']
})
export class NotepadComponent implements OnInit {

  public notepadForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.notepadFormInit();
  }

  public createNewNote(formData: NoteFormData): void {
    // TODO add logic for creating new note
  }

  public saveAllData() {
    // TODO add logic for saving all data
  }

  public deleteNotepad() {
    // TODO add logic for deleting notepad
  }

  public deleteNote(): void {
    // TODO add logic for removing note
  }

  private notepadFormInit(): void {
    this.notepadForm = new FormGroup({
      'notepadName': new FormControl('')
    });
  }
}
