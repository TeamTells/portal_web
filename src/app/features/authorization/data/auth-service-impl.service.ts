import {Injectable} from "@angular/core";
import {BehaviorSubject, catchError, map, mergeMap, Observable, of} from "rxjs";
import {AuthService} from "../domain/auth.service";
import {LoginByPasswordData} from "../domain/login-by-password-data";
import {HttpClient, HttpErrorResponse, HttpStatusCode} from "@angular/common/http";
import {User} from "../domain/user";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {LoginResponseJson} from "./json/login-response-json";
import {LoginStatus} from "../domain/login-status";

@Injectable({
  providedIn: 'root',
})
export class AuthServiceImpl implements AuthService {

  private userSubject: BehaviorSubject<User | null>
  public userObservable: Observable<User | null>
  private refreshTokenTimeout = 0;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject<User | null>(null)
    this.userObservable = this.userSubject.asObservable()
  }

  getUser(): User | null {
    return this.userSubject.getValue();
  }

  isAuthenticated(): boolean {
    return this.getUser() != null;
  }

  login(data: LoginByPasswordData): Observable<LoginStatus> {
    return this.http.get<any>(`${environment.apiUrl}/authorization/salt/${data.login}`)
      .pipe(mergeMap((response) => {
          const body = {login: data.login, password: data.password}
          return this.http.post<LoginResponseJson>(`${environment.apiUrl}/authorization/login`, body, {withCredentials: true})
            .pipe(map(response => {
              this.userSubject.next(new User(response.accessJwtToken));
              this.startRefreshTokenTimer();
              return LoginStatus.SUCCESS;
            }));
        }),
        catchError(err => {
          if (err instanceof HttpErrorResponse && err.status == HttpStatusCode.NotFound) {
            return of(LoginStatus.INCORRECT_CREDENTIALS)
          } else {
            return of(LoginStatus.UNKNOWN)
          }
        })
      )
  }

  logout(): void {
    this.http.post<any>(`${environment.apiUrl}/users/logout`, {}, {withCredentials: true}).subscribe();
    this.stopRefreshTokenTimer();
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  refreshToken() {
    return this.http.post<any>(`${environment.apiUrl}/users/refresh-token`, {}, {withCredentials: true})
      .pipe(map((user) => {
        this.userSubject.next(user);
        this.startRefreshTokenTimer();
        return user;
      }));
  }

  private startRefreshTokenTimer() {
    const user = this.userSubject.getValue()
    if (user != null) {
      const jwtToken = JSON.parse(atob(user.jwtToken.split('.')[1]));
      const expires = new Date(jwtToken.exp * 1000);
      const timeout = expires.getTime() - Date.now() - (60 * 1000);
      this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
