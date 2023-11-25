import {AuthService} from "../domain/auth.service";

export function appInitializer(authService: AuthService) {
  return () => new Promise((resolve, reject) => {
    authService.refreshToken()
      .subscribe({
          complete: () => {
            resolve(undefined)
          },
          error:() => {
            resolve(undefined)
          }
        }
      )
  });
}
