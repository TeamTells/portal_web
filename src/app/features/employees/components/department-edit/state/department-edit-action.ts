import { DepartmentFullDto } from '../../../data/dto/department-full-dto';
import { EmployeeItemEntity } from '../../employee-item/employee-item.component';
import { DepartmentEntity } from '../../department/department.component';
import { IDepartmentEditState } from './department-edit-state';

export type DepartmentEditAction =
  | ChangeNameAction
  | ChangeSupervisorAction
  | RemoveSupervisorAction
  | ChangeParentDepartamentAction
  | RemoveParentDepartamentAction
  | AddEmpoyeesAction
  | RemoveEmpoyeesAction
  | InitializeAction
  | InitFieldAction
  | EditAction
  | OpenDepartmentModalAction
  | CloseDepartmentModalAction
  | OpenEmployeesModalAction
  | CloseEmployeesModalAction
  | OpenSupervisorModalAction
  | CloseSupervisorModalAction

export enum DepartmentEditActionTypes {
  CHANGE_NAME,
  CHANGE_SUPERVISOR,
  REMOVE_SUPERVISOR,
  CHANGE_PARENT_DEPARTAMENT,
  REMOVE_PARENT_DEPARTAMENT,
  ADD_EMLOYEES,
  REMOVE_EMPOYEES,
  OPEN_DEPARTAMENT_MODAL,
  CLOSE_DEPARTAMENT_MODAL,
  OPEN_EMPLOYEES_MODAL,
  CLOSE_EMPLOYEES_MODAL,
  OPEN_SUPERVISOR_MODAL,
  CLOSE_SUPERVISOR_MODAL,
  INITIALIZE,
  INIT_FIELD,
  EDIT,
}

export interface InitFieldAction {
  readonly type: DepartmentEditActionTypes.INIT_FIELD;
  readonly department: DepartmentFullDto;
}

export interface ChangeNameAction {
  readonly type: DepartmentEditActionTypes.CHANGE_NAME;
  readonly name: string;
}

export interface ChangeSupervisorAction {
  readonly type: DepartmentEditActionTypes.CHANGE_SUPERVISOR;
  readonly supervisor: EmployeeItemEntity;
}

export interface RemoveSupervisorAction {
  readonly type: DepartmentEditActionTypes.REMOVE_SUPERVISOR;
}

export interface ChangeParentDepartamentAction {
  readonly type: DepartmentEditActionTypes.CHANGE_PARENT_DEPARTAMENT;
  readonly parentDepartament: DepartmentEntity;
}

export interface RemoveParentDepartamentAction {
  readonly type: DepartmentEditActionTypes.REMOVE_PARENT_DEPARTAMENT;
}

export interface AddEmpoyeesAction {
  readonly type: DepartmentEditActionTypes.ADD_EMLOYEES;
  readonly empoyees: EmployeeItemEntity[];
}

export interface RemoveEmpoyeesAction {
  readonly type: DepartmentEditActionTypes.REMOVE_EMPOYEES;
  readonly empoyees: EmployeeItemEntity[];
}

export interface InitializeAction {
  readonly type: DepartmentEditActionTypes.INITIALIZE;
  readonly state: IDepartmentEditState;
}

export interface EditAction {
  readonly type: DepartmentEditActionTypes.EDIT;
}


export interface OpenDepartmentModalAction {
  readonly type: DepartmentEditActionTypes.OPEN_DEPARTAMENT_MODAL;
}
export interface CloseDepartmentModalAction {
  readonly type: DepartmentEditActionTypes.CLOSE_DEPARTAMENT_MODAL;
}
export interface OpenEmployeesModalAction {
  readonly type: DepartmentEditActionTypes.OPEN_EMPLOYEES_MODAL;
}
export interface CloseEmployeesModalAction {
  readonly type: DepartmentEditActionTypes.CLOSE_EMPLOYEES_MODAL;
}
export interface OpenSupervisorModalAction {
  readonly type: DepartmentEditActionTypes.OPEN_SUPERVISOR_MODAL;
}
export interface CloseSupervisorModalAction {
  readonly type: DepartmentEditActionTypes.CLOSE_SUPERVISOR_MODAL;
}
