import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationState {
  readonly email: string = ""
  readonly emailError: String = ""
  readonly password: string = ""
  readonly passwordError: String = ""
}
