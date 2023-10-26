import { DropdownItem } from 'src/app/core/components/dropdown-field/dropdown-field.component';

export type EmployeeNewResultAction =
  | ChangeFirstNameResultAction
  | ChangeLastNameResultAction
  | ChangePatronymicResultAction
  | ChangeDateOfBirthResultAction
  | ChangeEmailResultAction
  | ChangePasswordResultAction
  | ChangeDepartmentResultAction
  | ChangeRoleResultAction
  | ChangeRightResultAction
  | ValidationResultAction;

export enum EmployeeNewResultActionTypes {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_PATRONYMIC,
  CHANGE_DATE_OF_BIRTH,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  SELECT_DEPARTMENT,
  SELECT_ROLE,
  SELECT_RIGHT,
  VALIDATION_ERROR,
}

export interface ChangeFirstNameResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_FIRST_NAME;
  readonly firstName: string;
}

export interface ChangeLastNameResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_LAST_NAME;
  readonly lastName: string;
}

export interface ChangePatronymicResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_PATRONYMIC;
  readonly patronymic: string;
}

export interface ChangeDateOfBirthResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_DATE_OF_BIRTH;
  readonly dateOfDirth: string;
}

export interface ChangeEmailResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangePasswordResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_PASSWORD;
  readonly password: string;
}

// TODO: заменить DropdownItem на DTO-шки
export interface ChangeDepartmentResultAction {
  readonly type: EmployeeNewResultActionTypes.SELECT_DEPARTMENT;
  readonly department?: DropdownItem;
}

export interface ChangeRoleResultAction {
  readonly type: EmployeeNewResultActionTypes.SELECT_ROLE;
  readonly role?: DropdownItem;
}

export interface ChangeRightResultAction {
  readonly type: EmployeeNewResultActionTypes.SELECT_RIGHT;
  readonly right?: DropdownItem;
}

export interface ValidationResultAction {
  readonly type: EmployeeNewResultActionTypes.VALIDATION_ERROR;
  readonly firstNameError: string;
  readonly lastNameError: string;
  readonly dateOfBirthError: string;
  readonly emailError: string;
  readonly passwordError: string;
}
