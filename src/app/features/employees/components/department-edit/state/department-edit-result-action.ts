import { DepartmentFullDto } from '../../../data/dto/department-full-dto';
import { EmployeeItemEntity } from '../../employee-item/employee-item.component';
import { DepartmentEntity } from '../../department/department.component';
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
  | ChangeVisibleDepartmentModalResultAction
  | ChangeVisibleEmployeesModalResultAction
  | ChangeVisibleSupervisorModalResultAction
  | ValidationResultResultAction
  | InitFieldResultAction

export enum DepartmentEditResultActionTypes {
  CHANGE_NAME,
  CHANGE_SUPERVISOR,
  REMOVE_SUPERVISOR,
  CHANGE_PARENT_DEPARTAMENT,
  REMOVE_PARENT_DEPARTAMENT,
  CHANGE_VISIBLE_DEPARTAMENT_MODAL,
  CHANGE_VISIBLE_EMPLOYEES_MODAL,
  CHANGE_VISIBLE_SUPERVISOR_MODAL,
  ADD_EMLOYEES,
  REMOVE_EMPOYESS,
  INITIALIZE,
  VALIDATION_ERROR,
  INIT_FIELD
}


export interface InitFieldResultAction {
  readonly type: DepartmentEditResultActionTypes.INIT_FIELD;
  readonly department: DepartmentFullDto;
}

export interface ChangeNameResultAction {
  readonly type: DepartmentEditResultActionTypes.CHANGE_NAME;
  readonly name: string;
}

export interface ChangeSupervisorResultAction {
  readonly type: DepartmentEditResultActionTypes.CHANGE_SUPERVISOR;
  readonly supervisor: EmployeeItemEntity;
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
  readonly empoyees: EmployeeItemEntity[];
}

export interface RemoveEmpoyeesResultAction {
  readonly type: DepartmentEditResultActionTypes.REMOVE_EMPOYESS;
  readonly empoyees: EmployeeItemEntity[];
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

export interface ChangeVisibleDepartmentModalResultAction {
  readonly type: DepartmentEditResultActionTypes.CHANGE_VISIBLE_DEPARTAMENT_MODAL;
  readonly visible: boolean
}
export interface ChangeVisibleEmployeesModalResultAction {
  readonly type: DepartmentEditResultActionTypes.CHANGE_VISIBLE_EMPLOYEES_MODAL;
  readonly visible: boolean
}
export interface ChangeVisibleSupervisorModalResultAction {
  readonly type: DepartmentEditResultActionTypes.CHANGE_VISIBLE_SUPERVISOR_MODAL;
  readonly visible: boolean
}