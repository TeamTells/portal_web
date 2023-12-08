import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationState {
  readonly email: string = '';
  readonly emailError: String = '';
  readonly password: string = '';
  readonly passwordError: String = '';
  readonly isLoading: boolean = false;
  readonly loginError: LoginErrorState | null = null;
  readonly rememberMe: boolean = true;
}

export enum LoginErrorState {
  INCORRECT_CREDENTIALS,
  CONNECTION_ERROR,
}
