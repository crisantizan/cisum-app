import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { DialogsModule } from './dialogs/dialogs.module';
import { LoadingInterceptor } from './common/interceptors/loading.interceptor';
import { environment as env } from 'src/environments/environment';
import { BaseUrlInterceptor } from './common/interceptors/base-url.interceptor';
import { TokenInterceptor } from './common/interceptors/token.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DialogsModule,
    MatProgressBarModule,
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: env.apiUrl },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
