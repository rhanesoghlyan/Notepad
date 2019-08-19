import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ValidatorHelper} from '@core/helpers/validator.helper';
import {NoteFormDataModel} from '@core/models/note.models';

@Component({
  selector: 'app-note-field',
  templateUrl: './note-field.component.html',
  styleUrls: ['./note-field.component.scss']
})
export class NoteFieldComponent implements OnInit {

  public noteForm: FormGroup;

  @Input()
  public title: string = '';
  @Input()
  public description: string = '';
  @Input()
  public isCreationMode: boolean = false;
  @Input()
  public gistId: string = '';

  @Output()
  public addNewNote: EventEmitter<NoteFormDataModel> = new EventEmitter<NoteFormDataModel>();

  public validationConfigs = ValidatorHelper.getNoteValidationConfigs();

  constructor() {
  }

  ngOnInit() {
    this.noteFormInit();
  }

  public createNewNote(event): void {
    event.stopPropagation();
    event.preventDefault();

    if (this.noteForm.invalid || !this.gistId) {
      const formControls = this.noteForm.controls;

      for (const item in formControls) {
        if (formControls.hasOwnProperty(item)) {
          formControls[item].markAsTouched();
        }
      }
    } else {
      this.addNewNote.emit(this.noteForm.getRawValue());
      this.noteForm.reset();
    }
  }

  private noteFormInit(): void {
    this.noteForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(this.validationConfigs.title.minLength),
        Validators.maxLength(this.validationConfigs.title.maxLength)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(this.validationConfigs.description.minLength),
        Validators.maxLength(this.validationConfigs.description.maxLength)
      ])
    });
  }
}
