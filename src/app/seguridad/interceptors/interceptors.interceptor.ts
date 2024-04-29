import { HttpInterceptorFn } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SecurcityManagerService } from '../exploresManager/securcity-manager.service';

export const interceptorsInterceptor: HttpInterceptorFn = (req, next) => {
  const router = Inject(Router);
  const storage = Inject(SecurcityManagerService);

  if(storage.getItem('token')){
    const newReq = req.clone({
      setHeaders:{
        'Authorization': 'Bearer ' + storage.getItem('token'),
      }
    })
    return next(newReq);
  }  
  
  return next(req)
  
};
