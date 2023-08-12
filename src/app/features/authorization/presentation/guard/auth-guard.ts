import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "../../domain/auth.service";

export const loginGuardFunction: CanActivateFn = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.isLoggedIn) {
    return true
  }

  return router.parseUrl('/login')
}

export const alreadyLoginGuardFunction: CanActivateFn = () => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if (!authService.isLoggedIn) {
    return true
  }

  return router.parseUrl('/')
}
