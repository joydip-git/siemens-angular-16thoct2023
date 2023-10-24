import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Injectable()
export class ProductAuthGuard {
  constructor(private tokenSvc: TokenService, private router: Router) {

  }
  canActivate() {

  }

}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(ProductAuthGuard).canActivate(route)
};
