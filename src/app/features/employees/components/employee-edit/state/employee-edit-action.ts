import { EmployeeWithConnectionsDto } from '../../../data/dto/employee-with-connections-dto'; 
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
  | ChangePhoneNumberAction
  | ChangeJobTitleAction
  | InitializeAction
  | EditAction
  | OpenDepartmentModalAction
  | CloseDepartmentModalAction
  | InitEmployeeFieldAction

export enum EmployeeEditActionTypes {
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
  SELECT_RIGHT,
  INITIALIZE,
  EDIT,
  OPEN_DEPARTMENT_MODAL,
  CLOSE_DEPARTMENT_MODAL,
  INIT_EMPLOYEE_FIELD
}

export interface InitEmployeeFieldAction {
  readonly type: EmployeeEditActionTypes.INIT_EMPLOYEE_FIELD;
  readonly employee: EmployeeWithConnectionsDto
}

export interface ChangeJobTitleAction {
  readonly type: EmployeeEditActionTypes.CHANGE_JOB_TITLE;
  readonly jobTitle: string;
}

export interface ChangePhoneNumberAction {
  readonly type: EmployeeEditActionTypes.CHANGE_PHONE_NUMBER;
  readonly phoneNumber: string;
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

export interface OpenDepartmentModalAction {
  readonly type: EmployeeEditActionTypes.OPEN_DEPARTMENT_MODAL;
}

export interface CloseDepartmentModalAction {
  readonly type: EmployeeEditActionTypes.CLOSE_DEPARTMENT_MODAL;
}
