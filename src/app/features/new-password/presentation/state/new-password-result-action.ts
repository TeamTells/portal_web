import { NewPasswordErrorState, NewPasswordStatus } from './new-password-state';

export type NewPasswordResultAction =
  | ChangePasswordResultAction
  | ValidationResultAction
  | ChangeLoadingStateAction
  | ChangeStatusStateAction
  | UpdateNewPasswordErrorStateAction;

export enum NewPasswordResultActionTypes {
  CHANGE_PASSWORD,
  VALIDATION_ERROR,
  CHANGE_LOADING_STATE,
  UPDATE_NEW_PASSWORD_ERROR_STATE,
  CHANGE_STATUS_STATE,
  NEW,
}

export interface ChangePasswordResultAction {
  readonly type: NewPasswordResultActionTypes.CHANGE_PASSWORD;
  readonly password: string;
}

export interface ValidationResultAction {
  readonly type: NewPasswordResultActionTypes.VALIDATION_ERROR;
  readonly passwordError: string;
}

export interface ChangeLoadingStateAction {
  readonly type: NewPasswordResultActionTypes.CHANGE_LOADING_STATE;
}

export interface ChangeStatusStateAction {
  readonly type: NewPasswordResultActionTypes.CHANGE_STATUS_STATE;
  readonly status: NewPasswordStatus;
}

export interface UpdateNewPasswordErrorStateAction {
  readonly type: NewPasswordResultActionTypes.UPDATE_NEW_PASSWORD_ERROR_STATE;
  readonly errorState: NewPasswordErrorState;
}
