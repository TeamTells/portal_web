import {Injectable} from "@angular/core";
import {BehaviorSubject, catchError, map, mergeMap, Observable, of} from "rxjs";
import {AuthService} from "../domain/auth.service";
import {LoginByPasswordData} from "../domain/login-by-password-data";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {LoginResponseJson} from "./json/login-response-json";
import {LoginStatus} from "../domain/login-status";
import {jwtDecode} from "jwt-decode";
import {AuthorizationNavigator} from "../presentation/navigation/authorization-navigator";
import {CryptUtils} from "../../../core/crypt/crypt-utils";
import {SaltResponseJson} from "./json/salt-response-json";
import {Account, Company, User} from "../domain/account";
import {RefreshTokenResponseJson} from "./json/refresh-token-response-json";

@Injectable({
  providedIn: 'root',
})
export class AuthServiceImpl implements AuthService {

  private userSubject: BehaviorSubject<Account | null>
  public userObservable: Observable<Account | null>
  private refreshTokenTimeout = 0;

  constructor(
    private http: HttpClient,
    private navigator: AuthorizationNavigator
  ) {
    this.userSubject = new BehaviorSubject<Account | null>(null)
    this.userObservable = this.userSubject.asObservable()
  }

  getAccount(): Account | null {
    return this.userSubject.getValue();
  }

  isAuthenticated(): boolean {
    return this.getAccount() != null;
  }

  login(data: LoginByPasswordData): Observable<LoginStatus> {
    return this.http.get<SaltResponseJson>(`${environment.apiUrl}/authorization/salt/${data.login}`)
      .pipe(mergeMap((response) => {
          const hashPassword = CryptUtils.toSha256Hash(data.password, response.salt)
          const body = {login: data.login, password: hashPassword}
          return this.http.post<LoginResponseJson>(`${environment.apiUrl}/authorization/login`, body, {withCredentials: true})
            .pipe(map(response => {
              const user = new User(response.user.id)
              const company = new Company(response.company.id)
              const account = new Account(
                response.accessJwtToken,
                user,
                company
              )
              localStorage.setItem('user', JSON.stringify(user))
              localStorage.setItem('company', JSON.stringify(company))

              this.userSubject.next(account);
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
    this.http.post<any>(`${environment.apiUrl}/authorization/logout`, {}, {withCredentials: true}).subscribe();
    this.stopRefreshTokenTimer();
    this.userSubject.next(null);
    this.navigator.openLogin()
  }

  refreshToken() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),

      withCredentials: true,
      observe: 'response' as 'response'
    };

    return this.http.get<RefreshTokenResponseJson>(`${environment.apiUrl}/authorization/refresh-token`, httpOptions)
      .pipe(map(response => {
        const user = JSON.parse(localStorage.getItem('user')!)
        const company = JSON.parse(localStorage.getItem('company')!)
        const account = new Account(
          response.body?.accessJwtToken!,
          user,
          company
        )
        this.userSubject.next(account);
        this.startRefreshTokenTimer();
        return response;
      }));
  }

  private startRefreshTokenTimer() {
    const user = this.userSubject.getValue()
    if (user != null) {
      const decodedToken = jwtDecode(user.jwtToken)
      const exp = decodedToken.exp
      if (exp != undefined) {
        const timeout = exp - Date.now() - (60 * 1000);
        console.log(timeout)
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
      }
    }
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
