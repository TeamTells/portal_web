import {LoginErrorState} from "./authorization-state";

export type AuthorizationResultAction = ChangeEmailResultAction
  | ChangePasswordResultAction
  | ValidationResultAction
  | ChangeLoadingStateAction
  | UpdateLoginErrorStateAction

export enum AuthorizationResultActionTypes {
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  VALIDATION_ERROR,
  CHANGE_LOADING_STATE,
  UPDATE_LOGIN_ERROR_STATE
}

export interface ChangeEmailResultAction {
  readonly type: AuthorizationResultActionTypes.CHANGE_EMAIL
  readonly email: string
}

export interface ChangePasswordResultAction {
  readonly type: AuthorizationResultActionTypes.CHANGE_PASSWORD
  readonly password: string
}

export interface ValidationResultAction {
  readonly type: AuthorizationResultActionTypes.VALIDATION_ERROR
  readonly emailError: string,
  readonly passwordError: string
}

export interface ChangeLoadingStateAction {
  readonly type: AuthorizationResultActionTypes.CHANGE_LOADING_STATE
}

export interface UpdateLoginErrorStateAction {
  readonly type: AuthorizationResultActionTypes.UPDATE_LOGIN_ERROR_STATE,
  readonly errorState: LoginErrorState
}
