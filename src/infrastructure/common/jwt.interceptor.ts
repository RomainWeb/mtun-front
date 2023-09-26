import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TokenPort } from '@domain/auth/ports/token.port';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly tokenPort: TokenPort) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const token = this.tokenPort.getToken();
    const isApiUrl = request.url.startsWith(environment.apiUrl);
    if (token && isApiUrl) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${this.tokenPort.getToken()}` },
      });
    } else {
    }

    return next.handle(request);
  }
}

export const jwtInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
];
