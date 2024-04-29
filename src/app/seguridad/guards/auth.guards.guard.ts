import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SecurcityManagerService } from '../exploresManager/securcity-manager.service';

export const authGuardsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storage =  inject(SecurcityManagerService);

  if(storage.recuperar('token')){
    return true;
  }
  router.navigate(['/']);
  return false;
};
