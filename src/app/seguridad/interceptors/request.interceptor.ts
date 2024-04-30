import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { SecurcityManagerService } from '../exploresManager/securcity-manager.service';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {

 const storage = inject(SecurcityManagerService);
  if(storage.recuperar('token')){
    const newReq = req.clone({
      setHeaders:{
        'Authorization': 'Bearer ' + storage.recuperar('token'),
      }
    })
    return next(newReq);
  }  
  

  return next(req)
};
