import {Observable} from "rxjs";
import {LoginByPasswordData} from "./login-by-password-data";
import {User} from "./user";

export abstract class AuthService {

  public abstract userObservable: Observable<User | null>

  abstract getUser(): User | null

  abstract login(data: LoginByPasswordData): Observable<boolean>

  abstract logout(): void

  abstract refreshToken(): Observable<any>

}
