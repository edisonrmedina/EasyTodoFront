import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const allowPageGuard: CanActivateFn = (route, state) => {
  
  const router = inject(Router);
  if(route.data['id'] === 1){
    return true;
  }

  router.navigate(['/app','/home'])
  return true;

};
