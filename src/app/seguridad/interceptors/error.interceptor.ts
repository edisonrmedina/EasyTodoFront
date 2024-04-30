import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  return next(req).pipe(
    catchError((error: any) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          console.log("Unauthorized error occurred");
          //this.loginService.cierraSesion();
        } else {
          console.log("Inappropriate response error:", error);
        }
      } else {
        console.log("Unhandled error occurred:", error);
      }
      return throwError(() => error);
    })
  );
};
