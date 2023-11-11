import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationState {
  readonly email: string = ""
  readonly emailError: String = ""
  readonly password: string = ""
  readonly passwordError: String = ""
  readonly isLoading: boolean = false
  readonly loginError: LoginErrorState | null = null
}

export enum LoginErrorState {
  INCORRECT_CREDENTIALS,
  CONNECTION_ERROR
}
