import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MessagesService } from '../services/messages.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private messagesService: MessagesService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (!environment.production) {
          console.log(err);
        }
        let ErrorMsg = '';
        if (err.error instanceof ErrorEvent) {
          ErrorMsg = `Error: ${err.error.message}`;
        } else if (Array.isArray(err.error) && err.error.length) {
          ErrorMsg = `Error: ${err.error[0]}`;
        } else if (err.error.errors) {
          ErrorMsg = `Error: ${err.error.errors}`;
        } else {
          ErrorMsg = `Error code: ${err.status}, message: ${err.message}`;
        }

        this.messagesService.add(ErrorMsg);
        return throwError(() => new Error(ErrorMsg));
      })
    );
  }
}
