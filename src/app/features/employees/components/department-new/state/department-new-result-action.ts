import { EmployeeDto } from '../../../data/employees-data-service';
import { DepartmentEntity } from '../../department/department.component';

export type DepartmentNewResultAction =
  | ChangeNameResultAction
  | ChangeSupervisorResultAction
  | RemoveSupervisorResultAction
  | ChangeParentDepartamentResultAction
  | RemoveParentDepartamentResultAction
  | AddEmpoyeesResultAction
  | RemoveEmployeesResultAction
  | ValidationResultAction
  | ChangeVisibleDepartmentModalResultAction
  | ChangeVisibleEmployeesModalResultAction
  | ChangeVisibleSupervisorModalResultAction

export enum DepartmentNewResultActionTypes {
  CHANGE_NAME,
  CHANGE_SUPERVISOR,
  REMOVE_SUPERVISOR,
  CHANGE_VISIBLE_DEPARTAMENT_MODAL,
  CHANGE_VISIBLE_EMPLOYEES_MODAL,
  CHANGE_VISIBLE_SUPERVISOR_MODAL,
  CHANGE_PARENT_DEPARTAMENT,
  REMOVE_PARENT_DEPARTAMENT,
  ADD_EMPLOYEES,
  REMOVE_EMPLOYEES,
  VALIDATION_ERROR,
}

export interface ChangeNameResultAction {
  readonly type: DepartmentNewResultActionTypes.CHANGE_NAME;
  readonly name: string;
}

export interface ChangeSupervisorResultAction {
  readonly type: DepartmentNewResultActionTypes.CHANGE_SUPERVISOR;
  readonly supervisor: EmployeeDto;
}

export interface RemoveSupervisorResultAction {
  readonly type: DepartmentNewResultActionTypes.REMOVE_SUPERVISOR;
}

export interface ChangeParentDepartamentResultAction {
  readonly type: DepartmentNewResultActionTypes.CHANGE_PARENT_DEPARTAMENT;
  readonly parentDepartament: DepartmentEntity;
}

export interface RemoveParentDepartamentResultAction {
  readonly type: DepartmentNewResultActionTypes.REMOVE_PARENT_DEPARTAMENT;
}

export interface AddEmpoyeesResultAction {
  readonly type: DepartmentNewResultActionTypes.ADD_EMPLOYEES;
  readonly employees: EmployeeDto[];
}

export interface RemoveEmployeesResultAction {
  readonly type: DepartmentNewResultActionTypes.REMOVE_EMPLOYEES;
  readonly employees: EmployeeDto[];
}

export interface ValidationResultAction {
  readonly type: DepartmentNewResultActionTypes.VALIDATION_ERROR;
  readonly nameError: string;
  readonly supervisorError: string;
  readonly parentDepartmentError: string;
}

export interface ChangeVisibleDepartmentModalResultAction {
  readonly type: DepartmentNewResultActionTypes.CHANGE_VISIBLE_DEPARTAMENT_MODAL;
  readonly visible: boolean
}
export interface ChangeVisibleEmployeesModalResultAction {
  readonly type: DepartmentNewResultActionTypes.CHANGE_VISIBLE_EMPLOYEES_MODAL;
  readonly visible: boolean
}
export interface ChangeVisibleSupervisorModalResultAction {
  readonly type: DepartmentNewResultActionTypes.CHANGE_VISIBLE_SUPERVISOR_MODAL;
  readonly visible: boolean
}