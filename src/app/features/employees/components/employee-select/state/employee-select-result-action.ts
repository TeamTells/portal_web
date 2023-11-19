import { DepartmentEntity } from "../../department/department.component"
import { EmployeeItemEntity } from "../../employee-item/employee-item.component"

export type EmployeeSelectResultAction = InitDataResultAction
  | SelectResultAction
  | MoveToDepartmentResultAction
  | NewDepartmentResultAction
  | DeleteResultAction

export enum EmployeeSelectResultActionTypes {
  INIT_DATA,
  SELECT,
  MOVE_TO_DEPARTMENT,
  NEW_DEPARTMENT,
  DELETE,
}

export interface InitDataResultAction {
  readonly type: EmployeeSelectResultActionTypes.INIT_DATA
  readonly employees: EmployeeItemEntity[]
  readonly departments: DepartmentEntity[]
}

export interface SelectResultAction {
  readonly type: EmployeeSelectResultActionTypes.SELECT
  readonly selectCount: number
  readonly visible: boolean
}
export interface MoveToDepartmentResultAction {
  readonly type: EmployeeSelectResultActionTypes.MOVE_TO_DEPARTMENT
}

export interface NewDepartmentResultAction {
  readonly type: EmployeeSelectResultActionTypes.NEW_DEPARTMENT
}

export interface DeleteResultAction {
  readonly type: EmployeeSelectResultActionTypes.DELETE
}