import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { urls } from './interceptor';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.handleRequests(request, next);
  }

  private handleRequests(request: HttpRequest<any>, next: HttpHandler): any {
    const req = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });

    console.log('Request for url: ' + req.url);

    for (const element of urls) {
      if (req.url.includes(element.url)) {

        console.log('Loaded from json for url: ' + req.url);
        return of(new HttpResponse({ status: 200, body: ((element.json) as any) }));

      }
    }
    return next.handle(req);
  }
}
