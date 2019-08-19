import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {NotepadResponseModel} from '@core/models/note.models';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class NotepadService {
  constructor(private _http: HttpClient) {
  }

  public createNotepad(notepadData): Observable<any> {
    return this._http.post(`${environment.gistUrl}`, notepadData);
  }

  public getNotepadData(gistId): Observable<NotepadResponseModel> {
    return this._http.get<NotepadResponseModel>(`${environment.gistUrl}/${gistId}`).pipe(
      map((data: any) => {
        return JSON.parse(data.files[environment.gistFileName].content);
      })
    );
  }

  public updateNotepadData(updatedData, gistId): Observable<any> {
    return this._http.patch(`${environment.gistUrl}/${gistId}`, updatedData).pipe(
      map((data: any) => {
        return JSON.parse(data.files[environment.gistFileName].content);
      })
    );
  }

  public removeNotepad(gistId: string): Observable<any> {
    return this._http.delete<NotepadResponseModel>(`${environment.gistUrl}/${gistId}`);
  }
}
