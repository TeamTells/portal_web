import { DepartmentEntity } from "../../department/department.component"
import { EmployeeItemEntity } from "../../employee-item/employee-item.component"
import { EmployeeSelectSettings } from "../interfaces/employee-select-settings"
import { SearchEmployeeDepartmentData } from "../interfaces/search-employee-department-data"

export type EmployeeSelectResultAction = InitDataResultAction
  | SearchFieldChangeAction
  | SelectResultAction
  | MoveToDepartmentResultAction
  | NewDepartmentResultAction
  | DeleteResultAction

export enum EmployeeSelectResultActionTypes {
  INIT_DATA,
  SEARCH_FIELD_CHANGE,
  SELECT,
  MOVE_TO_DEPARTMENT,
  MOVE_TO_DEPARTMENT_CLOSE,
  NEW_DEPARTMENT,
  DELETE,
}

export interface InitDataResultAction {
  readonly type: EmployeeSelectResultActionTypes.INIT_DATA
  readonly settings: EmployeeSelectSettings
  readonly employees: EmployeeItemEntity[]
  readonly departments: DepartmentEntity[]
  readonly selectedCount: number
  readonly visibleTools: boolean
}

export interface SearchFieldChangeAction {
  readonly type: EmployeeSelectResultActionTypes.SEARCH_FIELD_CHANGE
  readonly str: string
  readonly searchDepartments: SearchEmployeeDepartmentData[]
}

export interface SelectResultAction {
  readonly type: EmployeeSelectResultActionTypes.SELECT
  readonly selectCount: number
  readonly visible: boolean
}

export interface MoveToDepartmentResultAction {
  readonly type: EmployeeSelectResultActionTypes.MOVE_TO_DEPARTMENT
  readonly visible: boolean
}

export interface NewDepartmentResultAction {
  readonly type: EmployeeSelectResultActionTypes.NEW_DEPARTMENT
}

export interface DeleteResultAction {
  readonly type: EmployeeSelectResultActionTypes.DELETE
}