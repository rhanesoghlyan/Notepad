import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class StatisticalAnalysisService {

  constructor(private _http: HttpClient) {
  }

}
