export type AuthorizationAction =
  | ChangeEmailAction
  | ChangePasswordAction
  | ToggleRememberMeAction
  | LoginAction;

export enum AuthorizationActionTypes {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  TOGGLE_REMEMBER_ME,
  LOGIN,
}

export interface ChangeEmailAction {
  readonly type: AuthorizationActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangePasswordAction {
  readonly type: AuthorizationActionTypes.CHANGE_PASSWORD;
  readonly password: string;
}

export interface LoginAction {
  readonly type: AuthorizationActionTypes.LOGIN;
}

export interface ToggleRememberMeAction {
  readonly type: AuthorizationActionTypes.TOGGLE_REMEMBER_ME;
}
