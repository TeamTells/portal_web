export type ResetPasswordAction = ChangeEmailAction | ResetAction;

export enum ResetPasswordActionTypes {
  CHANGE_EMAIL,
  RESET,
}

export interface ChangeEmailAction {
  readonly type: ResetPasswordActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ResetAction {
  readonly type: ResetPasswordActionTypes.RESET;
}
