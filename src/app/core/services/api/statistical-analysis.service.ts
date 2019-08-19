import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticalAnalysisService {

  constructor(private _http: HttpClient) {
  }

  public getRecentlyCreatedDists(date: string, perPage: number): Observable<any> {
    const params = new HttpParams()
      .set('since', date)
      .set('page', '1')
      .set('per_page', perPage.toString());

    return this._http.get(`${environment.gistUrl}/public`, {params});
  }
}
