import { DropdownItem } from 'src/app/core/components/dropdown-field/dropdown-field.component';
import { RegistrationStatus } from './registration-state';

export type RegistrationResultAction =
  | ChangeEmailResultAction
  | ChangePhoneNumberResultAction
  | ChangeNameResultAction
  | ChangeSpecializingResultAction
  | RemoveSpecializingResultAction
  | ChangeStaffSizeResultAction
  | RemoveStaffSizeResultAction
  | ChangeStatusStateResultAction
  | ValidationResultAction
  | CreateResultAction;

export enum RegistrationResultActionTypes {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PHONE_NUMBER,
  CHANGE_STAFF_SIZE,
  REMOVE_STAFF_SIZE,
  CHANGE_SPECIALIZING,
  REMOVE_SPECIALIZING,
  VALIDATION_ERROR,
  CHANGE_STATUS_STATE,
  CREATE,
}

export interface ChangeNameResultAction {
  readonly type: RegistrationResultActionTypes.CHANGE_NAME;
  readonly name: string;
}

export interface ChangeEmailResultAction {
  readonly type: RegistrationResultActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangePhoneNumberResultAction {
  readonly type: RegistrationResultActionTypes.CHANGE_PHONE_NUMBER;
  readonly phoneNumber: string;
}

export interface ChangeStaffSizeResultAction {
  readonly type: RegistrationResultActionTypes.CHANGE_STAFF_SIZE;
  readonly staffSize: DropdownItem | null;
}

export interface RemoveStaffSizeResultAction {
  readonly type: RegistrationResultActionTypes.REMOVE_STAFF_SIZE;
}

export interface ChangeSpecializingResultAction {
  readonly type: RegistrationResultActionTypes.CHANGE_SPECIALIZING;
  readonly specializing: DropdownItem | null;
}

export interface RemoveSpecializingResultAction {
  readonly type: RegistrationResultActionTypes.REMOVE_SPECIALIZING;
}

export interface ValidationResultAction {
  readonly type: RegistrationResultActionTypes.VALIDATION_ERROR;
  readonly nameError: string;
  readonly emailError: string;
  readonly phoneNumberError: string;
  readonly specializingError: string;
  readonly staffSizeError: string;
}

export interface CreateResultAction {
  readonly type: RegistrationResultActionTypes.CREATE;
}

export interface ChangeStatusStateResultAction {
  readonly type: RegistrationResultActionTypes.CHANGE_STATUS_STATE;
  readonly status: RegistrationStatus;
}
