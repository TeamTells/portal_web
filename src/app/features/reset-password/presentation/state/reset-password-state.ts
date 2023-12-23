import { Injectable } from '@angular/core';

export type ResetPasswordStatus = 'idle' | 'error' | 'success';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordState {
  readonly status: ResetPasswordStatus = 'idle';
  readonly email: string = '';
  readonly emailError: string = '';
  readonly isLoading: boolean = false;
  readonly resetPasswordError: ResetPasswordErrorState | null = null;
}

export enum ResetPasswordErrorState {
  INCORRECT_CREDENTIALS,
  CONNECTION_ERROR,
}
