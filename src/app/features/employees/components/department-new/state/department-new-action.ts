import { EmployeeDto } from '../../../data/employees-data-service';
import { DepartmentEntity } from '../../department/department.component';

export type DepartmentNewAction =
  | ChangeNameAction
  | ChangeSupervisorAction
  | RemoveSupervisorAction
  | ChangeParentDepartamentAction
  | RemoveParentDepartamentAction
  | AddEmpoyeesAction
  | RemoveEmpoyeesAction
  | CreateAction;

export enum DepartmentNewActionTypes {
  CHANGE_NAME,
  CHANGE_SUPERVISOR,
  REMOVE_SUPERVISOR,
  CHANGE_PARENT_DEPARTAMENT,
  REMOVE_PARENT_DEPARTAMENT,
  ADD_EMLOYEES,
  REMOVE_EMPOYEES,
  CREATE,
}

export interface ChangeNameAction {
  readonly type: DepartmentNewActionTypes.CHANGE_NAME;
  readonly name: string;
}

export interface ChangeSupervisorAction {
  readonly type: DepartmentNewActionTypes.CHANGE_SUPERVISOR;
  readonly supervisor: EmployeeDto;
}

export interface RemoveSupervisorAction {
  readonly type: DepartmentNewActionTypes.REMOVE_SUPERVISOR;
}

export interface ChangeParentDepartamentAction {
  readonly type: DepartmentNewActionTypes.CHANGE_PARENT_DEPARTAMENT;
  readonly parentDepartament: DepartmentEntity;
}

export interface RemoveParentDepartamentAction {
  readonly type: DepartmentNewActionTypes.REMOVE_PARENT_DEPARTAMENT;
}

export interface AddEmpoyeesAction {
  readonly type: DepartmentNewActionTypes.ADD_EMLOYEES;
  readonly empoyees: EmployeeDto[];
}

export interface RemoveEmpoyeesAction {
  readonly type: DepartmentNewActionTypes.REMOVE_EMPOYEES;
  readonly empoyees: EmployeeDto[];
}

export interface CreateAction {
  readonly type: DepartmentNewActionTypes.CREATE;
}
