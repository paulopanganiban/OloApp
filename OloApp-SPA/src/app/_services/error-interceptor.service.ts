import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { nextContext } from '@angular/core/src/render3';
import { catchError } from 'rxjs/operators';



@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {// returns type Observable<HttpEvent> {
    return next.handle(req) // observable to
      .pipe(
        catchError(error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              return throwError(error.statusText);
            }
            const applicationError = error.headers.get('Application-Error');
            if (applicationError) {
              console.error(applicationError);
              return throwError(applicationError);
            }
            const serverError = error.error;
            let modalStateErrors = '';
            if (serverError && typeof serverError === 'object') {
              for (const key in serverError) {
                if (serverError[key]) {
                  modalStateErrors += serverError[key] + '\n';
                }
              }
            }
            return throwError(modalStateErrors || serverError || 'Server Error');
          }
        })
      ); // kaya we use pipe to transform ze data
  }


  constructor() { }

}

export const ErrorInterceptorServiceProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
};