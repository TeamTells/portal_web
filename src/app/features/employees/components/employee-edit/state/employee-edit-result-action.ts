import { DropdownItem } from 'src/app/core/components/dropdown-field/dropdown-field.component';

export type EmployeeEditResultAction =
  | ChangeFirstNameResultAction
  | ChangeLastNameResultAction
  | ChangePatronymicResultAction
  | ChangeDateOfBirthResultAction
  | ChangeEmailResultAction
  | ChangePasswordResultAction
  | ChangeDepartmentResultAction
  | AddRoleResultAction
  | RemoveRoleResultAction
  | ValidationResultAction;

export enum EmployeeEditResultActionTypes {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_PATRONYMIC,
  CHANGE_DATE_OF_BIRTH,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  SELECT_DEPARTMENT,
  ADD_ROLE,
  REMOVE_ROLE,
  SELECT_RIGHT,
  VALIDATION_ERROR,
}

export interface ChangeFirstNameResultAction {
  readonly type: EmployeeEditResultActionTypes.CHANGE_FIRST_NAME;
  readonly firstName: string;
}

export interface ChangeLastNameResultAction {
  readonly type: EmployeeEditResultActionTypes.CHANGE_LAST_NAME;
  readonly lastName: string;
}

export interface ChangePatronymicResultAction {
  readonly type: EmployeeEditResultActionTypes.CHANGE_PATRONYMIC;
  readonly patronymic: string;
}

export interface ChangeDateOfBirthResultAction {
  readonly type: EmployeeEditResultActionTypes.CHANGE_DATE_OF_BIRTH;
  readonly dateOfBirth: string;
}

export interface ChangeEmailResultAction {
  readonly type: EmployeeEditResultActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangePasswordResultAction {
  readonly type: EmployeeEditResultActionTypes.CHANGE_PASSWORD;
  readonly password: string;
}

// TODO: заменить DropdownItem на DTO-шки
export interface ChangeDepartmentResultAction {
  readonly type: EmployeeEditResultActionTypes.SELECT_DEPARTMENT;
  readonly department?: DropdownItem;
}

export interface AddRoleResultAction {
  readonly type: EmployeeEditResultActionTypes.ADD_ROLE;
  readonly role?: DropdownItem;
}

export interface RemoveRoleResultAction {
  readonly type: EmployeeEditResultActionTypes.REMOVE_ROLE;
  readonly role?: DropdownItem;
}

export interface ValidationResultAction {
  readonly type: EmployeeEditResultActionTypes.VALIDATION_ERROR;
  readonly firstNameError: string;
  readonly lastNameError: string;
  readonly dateOfBirthError: string;
  readonly emailError: string;
  readonly passwordError: string;
}
