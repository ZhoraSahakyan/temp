import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { urls } from './interceptor';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.handleRequests(request, next);
  }

  private handleRequests(request: HttpRequest<any>, next: HttpHandler): any {
    const { url, method } = request;

    console.log('Request for url: ' + url);


    for (const element of urls) {
      if (url.includes(element.url)) {

        console.log('Loaded from json for url: ' + url);
        return of(new HttpResponse({ status: 200, body: ((element.json) as any) }));

      }
    }
    return next.handle(request);
  }
}
