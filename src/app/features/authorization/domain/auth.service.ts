import {Observable} from "rxjs";
import {LoginByPasswordData} from "./login-by-password-data";
import {User} from "./user";
import {LoginStatus} from "./login-status";

export abstract class AuthService {

  public abstract userObservable: Observable<User | null>

  abstract getUser(): User | null

  abstract isAuthenticated(): boolean

  abstract login(data: LoginByPasswordData): Observable<LoginStatus>

  abstract logout(): void

  abstract refreshToken(): Observable<any>

}
