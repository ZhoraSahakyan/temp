import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserDataProviderService } from '../services';

export const AuthorizeGuard: CanActivateFn = () => {
  const userDataProviderService = inject(UserDataProviderService);
  const router = inject(Router);

  if (userDataProviderService.getUser()) {
    return true;
  }

  router.navigate(['/auth']);
  return false;
};
