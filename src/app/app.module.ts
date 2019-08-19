import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {JwtInterceptor} from '@core/interceptor/jwt.interceptor';
import {AppComponent} from './components/root/app.component';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true
    },
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
