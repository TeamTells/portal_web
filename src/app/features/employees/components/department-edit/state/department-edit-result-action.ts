import { DepartmentEntity } from '../../department/department.component';
import { EmployeeEntity } from '../../employee-item/employee-item.component';
import { IDepartmentEditState } from './department-edit-state';

export type DepartmentEditResultAction =
  | ChangeNameResultAction
  | ChangeSupervisorResultAction
  | RemoveSupervisorResultAction
  | ChangeParentDepartamentResultAction
  | RemoveParentDepartamentResultAction
  | AddEmpoyeesResultAction
  | RemoveEmpoyeesResultAction
  | InitializeResultAction
  | ValidationResultResultAction;

export enum DepartmentEditResultActionTypes {
  CHANGE_NAME,
  CHANGE_SUPERVISOR,
  REMOVE_SUPERVISOR,
  CHANGE_PARENT_DEPARTAMENT,
  REMOVE_PARENT_DEPARTAMENT,
  ADD_EMLOYEES,
  REMOVE_EMPOYESS,
  INITIALIZE,
  VALIDATION_ERROR,
}

export interface ChangeNameResultAction {
  readonly type: DepartmentEditResultActionTypes.CHANGE_NAME;
  readonly name: string;
}

export interface ChangeSupervisorResultAction {
  readonly type: DepartmentEditResultActionTypes.CHANGE_SUPERVISOR;
  readonly supervisor: EmployeeEntity;
}

export interface RemoveSupervisorResultAction {
  readonly type: DepartmentEditResultActionTypes.REMOVE_SUPERVISOR;
}

export interface ChangeParentDepartamentResultAction {
  readonly type: DepartmentEditResultActionTypes.CHANGE_PARENT_DEPARTAMENT;
  readonly parentDepartament: DepartmentEntity;
}

export interface RemoveParentDepartamentResultAction {
  readonly type: DepartmentEditResultActionTypes.REMOVE_PARENT_DEPARTAMENT;
}

export interface AddEmpoyeesResultAction {
  readonly type: DepartmentEditResultActionTypes.ADD_EMLOYEES;
  readonly empoyees: EmployeeEntity[];
}

export interface RemoveEmpoyeesResultAction {
  readonly type: DepartmentEditResultActionTypes.REMOVE_EMPOYESS;
  readonly empoyees: EmployeeEntity[];
}

export interface InitializeResultAction {
  readonly type: DepartmentEditResultActionTypes.INITIALIZE;
  readonly state: IDepartmentEditState;
}

export interface ValidationResultResultAction {
  readonly type: DepartmentEditResultActionTypes.VALIDATION_ERROR;
  readonly nameError: string;
  readonly supervisorError: string;
  readonly parentDepartmentError: string;
}
