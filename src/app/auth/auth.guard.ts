import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);

  if (localStorage.getItem('auth-token')) {
    return true;
  }

  return router.parseUrl('/login');
};
