import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { requestIsExternal } from '../helpers/shared.helper';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor(@Inject('BASE_API_URL') private baseUrl: string) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!requestIsExternal(request.url)) {
      return next.handle(request);
    }

    const apiReq = request.clone({ url: `${this.baseUrl}/${request.url}` });

    return next.handle(apiReq);
  }
}
