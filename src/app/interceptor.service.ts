import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestapiService } from './restapi.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private service:RestapiService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
  let headerString = this.service.getAuthenticatedToken();
    let username = this.service.getAuthenticatedUser();
    if ( headerString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: headerString
        }
      })
    }
    return next.handle(request);
  }
}
