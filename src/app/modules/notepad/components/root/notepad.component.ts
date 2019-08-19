import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {NoteFormDataModel, NotepadResponseModel} from '@core/models/note.models';
import {LocalstorageService, NotepadService} from '@core/services';
import {StorageConstants} from '@core/constants/storage.contants';
import {ValidatorHelper} from '@core/helpers/validator.helper';
import {NotepadGist} from '@core/models/gist.models';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.sass']
})
export class NotepadComponent implements OnInit {
  public notepadForm: FormGroup;
  public notepadTitle: string = '';
  public createdNotes: Array<NoteFormDataModel> = [];
  public validationConfigs = ValidatorHelper.getNotepadValidationConfigs();

  private gistId: string = '';

  constructor(private notepadService: NotepadService) {
  }

  ngOnInit() {
    this.notepadFormInit();

    this.gistId = LocalstorageService.getData(StorageConstants.GIST_ID);

    if (!!this.gistId) {
      this.getNotepadData(this.gistId);
    }
  }

  public createNewNote(formData: NoteFormDataModel): void {
    this.notepadService.updateNotepadData(
      new NotepadGist(
        new NotepadResponseModel(this.notepadTitle, this.updateAndGetCurrentNoteState(this.createdNotes, formData))), this.gistId
    )
      .subscribe((notepadData: NotepadResponseModel) => {
        this.createdNotes = notepadData.notes;
      });
  }

  public saveNotepadData() {
    const notepadFormData = this.notepadForm.getRawValue();

    if (!this.gistId) {
      this.createNotepad(notepadFormData.notepadName);
      return;
    }

    this.notepadService.updateNotepadData(
      new NotepadGist(new NotepadResponseModel(notepadFormData.notepadName, this.createdNotes)), this.gistId)
      .subscribe((notepadData: NotepadResponseModel) => {
        this.notepadTitle = notepadData.title;
      });
  }

  public deleteNotepad() {
    if (!!this.gistId) {
      this.notepadService.removeNotepad(this.gistId)
        .subscribe(() => {
          LocalstorageService.clearItem(StorageConstants.GIST_ID);
          this.createdNotes = [];
          this.notepadTitle = '';
          this.gistId = '';
        });
    }
  }

  public deleteNote(index: number): void {
    this.createdNotes.splice(index, 1);

    this.notepadService.updateNotepadData(
      new NotepadGist(new NotepadResponseModel(this.notepadTitle, this.createdNotes)), this.gistId)
      .subscribe((notepadData: NotepadResponseModel) => {
        this.createdNotes = notepadData.notes;
      });
  }

  public trackByNotes(index: number): number {
    return index;
  }

  private createNotepad(title: string): void {
    this.notepadService.createNotepad(new NotepadGist(new NotepadResponseModel(title, [])))
      .subscribe((data) => {
        this.gistId = data.id;
        LocalstorageService.saveItem(StorageConstants.GIST_ID, data.id);
      });
  }

  private getNotepadData(gistId: string): void {
    this.notepadService.getNotepadData(gistId)
      .subscribe((notepadData: NotepadResponseModel) => {
        this.notepadTitle = notepadData.title;
        this.createdNotes = notepadData.notes;
      });
  }

  private updateAndGetCurrentNoteState(currentState: Array<NoteFormDataModel>, newNote: NoteFormDataModel): Array<NoteFormDataModel> {
    return [...currentState, newNote];
  }

  private notepadFormInit(): void {
    this.notepadForm = new FormGroup({
      'notepadName': new FormControl('', [
        Validators.required,
        Validators.minLength(this.validationConfigs.title.minLength),
        Validators.maxLength(this.validationConfigs.title.maxLength)
      ])
    });
  }
}
