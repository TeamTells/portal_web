import { EmployeeDto } from '../../../data/employees-data-service';
import { DepartmentEntity } from '../../department/department.component';

export type DepartmentNewResultAction =
  | ChangeNameResultAction
  | ChangeSupervisorResultAction
  | RemoveSupervisorResultAction
  | ChangeParentDepartamentResultAction
  | RemoveParentDepartamentResultAction
  | AddEmpoyeesResultAction
  | RemoveEmpoyeesResultAction
  | ValidationResultAction;

export enum DepartmentNewResultActionTypes {
  CHANGE_NAME,
  CHANGE_SUPERVISOR,
  REMOVE_SUPERVISOR,
  CHANGE_PARENT_DEPARTAMENT,
  REMOVE_PARENT_DEPARTAMENT,
  ADD_EMLOYEES,
  REMOVE_EMPOYESS,
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
  readonly type: DepartmentNewResultActionTypes.ADD_EMLOYEES;
  readonly empoyees: EmployeeDto[];
}

export interface RemoveEmpoyeesResultAction {
  readonly type: DepartmentNewResultActionTypes.REMOVE_EMPOYESS;
  readonly empoyees: EmployeeDto[];
}

export interface ValidationResultAction {
  readonly type: DepartmentNewResultActionTypes.VALIDATION_ERROR;
  readonly nameError: string;
  readonly supervisorError: string;
  readonly parentDepartmentError: string;
}
