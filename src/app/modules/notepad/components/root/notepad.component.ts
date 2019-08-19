import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

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

  private notepadFormInit(): void {
    this.notepadForm = new FormGroup({
      'notepadName': new FormControl('')
    });
  }
}
