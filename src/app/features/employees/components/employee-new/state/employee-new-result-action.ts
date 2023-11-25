import { DropdownItem } from 'src/app/core/components/dropdown-field/dropdown-field.component';
import { DepartmentEntity } from '../../department/department.component';

export type EmployeeNewResultAction =
  | ChangeFirstNameResultAction
  | ChangeLastNameResultAction
  | ChangePatronymicResultAction
  | ChangeDateOfBirthResultAction
  | ChangeEmailResultAction
  | ChangePasswordResultAction
  | ChangeDepartmentResultAction
  | RemoveDepartmentResultAction
  | AddRoleResultAction
  | RemoveRoleResultAction
  | ChangePhoneNumberResultAction
  | ChangeJobTitleResultAction
  | ValidationResultAction;

export enum EmployeeNewResultActionTypes {
  CHANGE_JOB_TITLE,
  CHANGE_PHONE_NUMBER,
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_PATRONYMIC,
  CHANGE_DATE_OF_BIRTH,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  SELECT_DEPARTMENT,
  REMOVE_DEPARTMENT,
  ADD_ROLE,
  REMOVE_ROLE,
  VALIDATION_ERROR,
}

export interface ChangePhoneNumberResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_PHONE_NUMBER;
  readonly phoneNumber: string;
}

export interface ChangeJobTitleResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_JOB_TITLE;
  readonly jobTitle: string;
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
  readonly dateOfBirth: string;
}

export interface ChangeEmailResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangePasswordResultAction {
  readonly type: EmployeeNewResultActionTypes.CHANGE_PASSWORD;
  readonly password: string;
}

export interface ChangeDepartmentResultAction {
  readonly type: EmployeeNewResultActionTypes.SELECT_DEPARTMENT;
  readonly department?: DepartmentEntity;
}

export interface RemoveDepartmentResultAction {
  readonly type: EmployeeNewResultActionTypes.REMOVE_DEPARTMENT;
}

export interface AddRoleResultAction {
  readonly type: EmployeeNewResultActionTypes.ADD_ROLE;
  readonly role?: DropdownItem;
}

export interface RemoveRoleResultAction {
  readonly type: EmployeeNewResultActionTypes.REMOVE_ROLE;
  readonly role?: DropdownItem;
}

export interface ValidationResultAction {
  readonly type: EmployeeNewResultActionTypes.VALIDATION_ERROR;
  readonly phoneNumberError: string;
  readonly jobTitleError: string;
  readonly firstNameError: string;
  readonly lastNameError: string;
  readonly dateOfBirthError: string;
  readonly emailError: string;
  readonly passwordError: string;
}
