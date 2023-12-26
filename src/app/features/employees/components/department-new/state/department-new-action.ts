import { EmployeeItemEntity } from '../../employee-item/employee-item.component'; 
import { DepartmentEntity } from '../../department/department.component';

export type DepartmentNewAction =
  | ChangeNameAction
  | ChangeSupervisorAction
  | RemoveSupervisorAction
  | ChangeParentDepartamentAction
  | RemoveParentDepartamentAction
  | AddEmpoyeesAction
  | RemoveEmpoyeeAction
  | RemoveEmpoyeesAction
  | CreateAction
  | OpenDepartmentModalAction
  | CloseDepartmentModalAction
  | OpenEmployeesModalAction
  | CloseEmployeesModalAction
  | OpenSupervisorModalAction
  | CloseSupervisorModalAction

export enum DepartmentNewActionTypes {
  CHANGE_NAME,
  CHANGE_SUPERVISOR,
  REMOVE_SUPERVISOR,
  OPEN_DEPARTAMENT_MODAL,
  CLOSE_DEPARTAMENT_MODAL,
  OPEN_EMPLOYEES_MODAL,
  CLOSE_EMPLOYEES_MODAL,
  OPEN_SUPERVISOR_MODAL,
  CLOSE_SUPERVISOR_MODAL,
  CHANGE_PARENT_DEPARTMENT,
  REMOVE_PARENT_DEPARTMENT,
  ADD_EMPLOYEES,
  REMOVE_EMPLOYEE,
  REMOVE_EMPLOYEES,
  CREATE,
}

export interface ChangeNameAction {
  readonly type: DepartmentNewActionTypes.CHANGE_NAME;
  readonly name: string;
}

export interface ChangeSupervisorAction {
  readonly type: DepartmentNewActionTypes.CHANGE_SUPERVISOR;
  readonly supervisor: EmployeeItemEntity;
}

export interface RemoveSupervisorAction {
  readonly type: DepartmentNewActionTypes.REMOVE_SUPERVISOR;
}

export interface ChangeParentDepartamentAction {
  readonly type: DepartmentNewActionTypes.CHANGE_PARENT_DEPARTMENT;
  readonly parentDepartment: DepartmentEntity;
}

export interface RemoveParentDepartamentAction {
  readonly type: DepartmentNewActionTypes.REMOVE_PARENT_DEPARTMENT;
}

export interface AddEmpoyeesAction {
  readonly type: DepartmentNewActionTypes.ADD_EMPLOYEES;
  readonly employees: EmployeeItemEntity[];
}

export interface RemoveEmpoyeeAction {
  readonly type: DepartmentNewActionTypes.REMOVE_EMPLOYEE;
  readonly employee: EmployeeItemEntity;
}

export interface RemoveEmpoyeesAction {
  readonly type: DepartmentNewActionTypes.REMOVE_EMPLOYEES;
  readonly employees: EmployeeItemEntity[];
}

export interface CreateAction {
  readonly type: DepartmentNewActionTypes.CREATE;
}

export interface OpenDepartmentModalAction {
  readonly type: DepartmentNewActionTypes.OPEN_DEPARTAMENT_MODAL;
}
export interface CloseDepartmentModalAction {
  readonly type: DepartmentNewActionTypes.CLOSE_DEPARTAMENT_MODAL;
}
export interface OpenEmployeesModalAction {
  readonly type: DepartmentNewActionTypes.OPEN_EMPLOYEES_MODAL;
}
export interface CloseEmployeesModalAction {
  readonly type: DepartmentNewActionTypes.CLOSE_EMPLOYEES_MODAL;
}
export interface OpenSupervisorModalAction {
  readonly type: DepartmentNewActionTypes.OPEN_SUPERVISOR_MODAL;
}
export interface CloseSupervisorModalAction {
  readonly type: DepartmentNewActionTypes.CLOSE_SUPERVISOR_MODAL;
}
