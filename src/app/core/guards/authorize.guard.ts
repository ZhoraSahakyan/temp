import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { JwtTokenService, UserDataProviderService } from '../services';

export const AuthorizeGuard: CanActivateFn = () => {
  const jwtService = inject(JwtTokenService);
  const userDataProviderService = inject(UserDataProviderService);
  const router = inject(Router);

  if (userDataProviderService.getUser()) {
    if (jwtService.isTokenExpired()) {
      router.navigate(['/auth']);
    } else {
      return true;
    }
  }

  router.navigate(['/auth']);
  return false;
};
