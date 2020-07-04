import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone();
    // request = request.clone({
    //   setHeaders: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //     Accept: 'application/json',
    //     Authorization: `Bearer ${this.auth.getToken()}`,
    //   },
    // });
    return next.handle(request);
  }
}