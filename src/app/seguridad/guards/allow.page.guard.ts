import { inject } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

export const allowPageGuard: CanActivateFn = (route, state) => {

  private router = inject(Router);
  
  if(route.data['id'] === 1){
    return true;
  }

  this.router.
  return true;
};
