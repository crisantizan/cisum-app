import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SharedService } from 'src/app/services/shared.service';
import { requestLoadSvgIcon } from '../helpers/shared.helper';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private sharedService: SharedService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (requestLoadSvgIcon(request.url)) {
      return next.handle(request);
    }

    this.sharedService.setLoading(true);

    return next
      .handle(request)
      .pipe(finalize(() => this.sharedService.setLoading(false)));
  }
}
