import { Observable } from 'rxjs';
import { LoginByPasswordData } from './login-by-password-data';
import { Account } from './account';
import { LoginStatus } from './login-status';

export abstract class AuthService {
  public abstract userObservable: Observable<Account | null>;

  abstract getAccount(): Account | null;

  abstract isAuthenticated(): boolean;

  abstract login(data: LoginByPasswordData): Observable<LoginStatus>;

  abstract logout(): void;

  abstract refreshToken(): Observable<any>;
}
