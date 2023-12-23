import { Injectable } from '@angular/core';

export type NewPasswordStatus = 'idle' | 'error' | 'success';

@Injectable({
  providedIn: 'root',
})
export class NewPasswordState {
  readonly status: NewPasswordStatus = 'idle';
  readonly password: string = '';
  readonly passwordError: string = '';
  readonly isLoading: boolean = false;
  readonly newPasswordError: NewPasswordErrorState | null = null;
}

export enum NewPasswordErrorState {
  INCORRECT_CREDENTIALS,
  CONNECTION_ERROR,
}
