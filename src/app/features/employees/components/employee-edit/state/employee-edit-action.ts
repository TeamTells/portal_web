import { DepartmentEntity } from '../../department/department.component';
import { IEmployeeEditState } from './employee-edit-state';

export type EmployeeEditAction =
  | ChangeFirstNameAction
  | ChangeLastNameAction
  | ChangePatronymicAction
  | ChangeDateOfBirthAction
  | ChangeEmailAction
  | ChangePasswordAction
  | ChangeDepartmentAction
  | RemoveDepartmentAction
  | AddRoleAction
  | RemoveRoleAction
  | InitializeAction
  | EditAction;

export enum EmployeeEditActionTypes {
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
  SELECT_RIGHT,
  INITIALIZE,
  EDIT,
}

export interface ChangeFirstNameAction {
  readonly type: EmployeeEditActionTypes.CHANGE_FIRST_NAME;
  readonly firstName: string;
}

export interface ChangeLastNameAction {
  readonly type: EmployeeEditActionTypes.CHANGE_LAST_NAME;
  readonly lastName: string;
}

export interface ChangePatronymicAction {
  readonly type: EmployeeEditActionTypes.CHANGE_PATRONYMIC;
  readonly patronymic: string;
}

export interface ChangeDateOfBirthAction {
  readonly type: EmployeeEditActionTypes.CHANGE_DATE_OF_BIRTH;
  readonly dateOfBirth: string;
}

export interface ChangeEmailAction {
  readonly type: EmployeeEditActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangePasswordAction {
  readonly type: EmployeeEditActionTypes.CHANGE_PASSWORD;
  readonly password: string;
}

export interface ChangeDepartmentAction {
  readonly type: EmployeeEditActionTypes.SELECT_DEPARTMENT;
  readonly department: DepartmentEntity;
}

export interface RemoveDepartmentAction {
  readonly type: EmployeeEditActionTypes.REMOVE_DEPARTMENT;
}

export interface AddRoleAction {
  readonly type: EmployeeEditActionTypes.ADD_ROLE;
  readonly roleId: number;
}

export interface RemoveRoleAction {
  readonly type: EmployeeEditActionTypes.REMOVE_ROLE;
  readonly roleId: number;
}

export interface InitializeAction {
  readonly type: EmployeeEditActionTypes.INITIALIZE;
  readonly state: IEmployeeEditState;
}

export interface EditAction {
  readonly type: EmployeeEditActionTypes.EDIT;
}
