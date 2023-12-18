export type NewPasswordAction = ChangePasswordAction | NewAction;

export enum NewPasswordActionTypes {
  CHANGE_PASSWORD,
  NEW,
}

export interface ChangePasswordAction {
  readonly type: NewPasswordActionTypes.CHANGE_PASSWORD;
  readonly password: string;
}

export interface NewAction {
  readonly type: NewPasswordActionTypes.NEW;
}
