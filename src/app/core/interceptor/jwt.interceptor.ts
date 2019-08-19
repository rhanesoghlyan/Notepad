import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

import {environment} from '@env/environment';

/**
 * Caches HTTP requests.
 * Use ExtendedHttpClient fluent API to configure caching for each request.
 */
@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.headers.has('Authorization')) {
      const token: string = environment.accessToken;

      const authReq = !!token ? request.clone({
        setHeaders: {Authorization: `token ${token}`},
      }) : request;

      return next.handle(authReq);
    }
  }
}
