import {
  ResetPasswordErrorState,
  ResetPasswordStatus,
} from './reset-password-state';

export type ResetPasswordResultAction =
  | ChangeEmailResultAction
  | ValidationResultAction
  | ChangeLoadingStateAction
  | ChangeStatusStateAction
  | UpdateResetPasswordErrorStateAction;

export enum ResetPasswordResultActionTypes {
  CHANGE_EMAIL,
  VALIDATION_ERROR,
  CHANGE_LOADING_STATE,
  UPDATE_LOGIN_ERROR_STATE,
  CHANGE_STATUS_STATE,
  RESET,
}

export interface ChangeEmailResultAction {
  readonly type: ResetPasswordResultActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ValidationResultAction {
  readonly type: ResetPasswordResultActionTypes.VALIDATION_ERROR;
  readonly emailError: string;
}

export interface ChangeLoadingStateAction {
  readonly type: ResetPasswordResultActionTypes.CHANGE_LOADING_STATE;
}

export interface ChangeStatusStateAction {
  readonly type: ResetPasswordResultActionTypes.CHANGE_STATUS_STATE;
  readonly status: ResetPasswordStatus;
}

export interface UpdateResetPasswordErrorStateAction {
  readonly type: ResetPasswordResultActionTypes.UPDATE_LOGIN_ERROR_STATE;
  readonly errorState: ResetPasswordErrorState;
}
