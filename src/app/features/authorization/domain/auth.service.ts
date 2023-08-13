import {Observable} from "rxjs";
import {LoginByPasswordData} from "./login-by-password-data";

export abstract class AuthService {

  abstract login(data: LoginByPasswordData): Observable<boolean>

}
