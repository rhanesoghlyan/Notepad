import {environment} from '@env/environment';
import {NotepadResponseModel} from '@core/models/note.models';

export class NotepadGist {
  public description: string;
  public files: object;

  constructor(content: NotepadResponseModel) {
    this.description = environment.gistDescription;
    this.files = {
      [environment.gistFileName]: {
        content: JSON.stringify({
          title: content.title,
          notes: content.notes
        })
      }
    };
  }
}
