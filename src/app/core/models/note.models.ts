export interface NoteFormDataModel {
  title: string;
  description: string;
}

export class NotepadResponseModel {
  public title: string;
  public notes: Array<NoteFormDataModel>;

  constructor(title: string,
              notes: Array<NoteFormDataModel>) {
    this.title = title;
    this.notes = notes;
  }
}
