import {Observable} from "rxjs";

export abstract class AuthService {

  abstract isLoggedIn: boolean

  abstract login(): Observable<boolean>

}
