import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable} from "rxjs";
import {AuthService} from "../domain/auth.service";
import {LoginByPasswordData} from "../domain/login-by-password-data";
import {HttpClient} from "@angular/common/http";
import {User} from "../domain/user";
import {environment} from "../../../enviroment";
import {Router} from "@angular/router";

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

  login(data: LoginByPasswordData): Observable<boolean> {
        const body = {login: data.login, password: data.password}
        return this.http.post<any>(`${environment.apiUrl}/users/login`, body, {withCredentials: true})
            .pipe(map(user => {
                this.userSubject.next(user);
                this.startRefreshTokenTimer();
                return user;
            }));
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
            const jwtToken = JSON.parse(atob(user.accessJwtToken.split('.')[1]));
            const expires = new Date(jwtToken.exp * 1000);
            const timeout = expires.getTime() - Date.now() - (60 * 1000);
            this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
        }
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}
