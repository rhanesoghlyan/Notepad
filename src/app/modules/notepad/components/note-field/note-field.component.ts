import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Component, Input, OnInit} from '@angular/core';
import {ValidatorHelper} from '@core/helpers/validator.helper';

@Component({
  selector: 'app-note-field',
  templateUrl: './note-field.component.html',
  styleUrls: ['./note-field.component.sass']
})
export class NoteFieldComponent implements OnInit {

  public noteForm: FormGroup;

  @Input()
  public title: string = '';
  @Input()
  public description: string = '';

  public validationConfigs = ValidatorHelper.getNoteValidationConfigs();

  constructor() {
  }

  ngOnInit() {
    this.noteFormInit();
  }

  public createNewNote(): void {
    // TODO add creation logic

    console.log(this.noteForm.getRawValue());
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
