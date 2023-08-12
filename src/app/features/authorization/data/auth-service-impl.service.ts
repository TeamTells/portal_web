import {Injectable} from "@angular/core";
import {delay, Observable, of, tap} from "rxjs";
import {AuthService} from "../domain/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthServiceImpl implements AuthService{

  isLoggedIn = false;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
