import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MessagesService } from '../services/messages.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messagesService: MessagesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
      let errMsg = '';
      if (err.error instanceof ErrorEvent) {
        errMsg = `Error: ${err.error.message}`;
      } else {
        errMsg = `Error code: ${err.status}, message: ${err.message}`;
      }

      this.messagesService.add(errMsg);
      return throwError(() => new Error(errMsg));
    })
    )
  }
}
