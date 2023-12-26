import { DepartmentEntity } from "../../department/department.component"
import { EmployeeItemEntity } from "../../employee-item/employee-item.component"
import { EmployeeSelectSettings } from "../interfaces/employee-select-settings"

export type EmployeeSelectAction = InitDataAction
    | SearchFieldChangeAction
    | SelectEmployeeAction
    | SelectDepartmentAction
    | UnselectAllAction
    | RouteToDepartmentAction
    | MoveToDepartmentAction
    | MoveToDepartmentCloseAction
    | NewDepartmentAction
    | DeleteAction

export enum EmployeeSelectActionTypes {
    INIT_DATA,
    SEARCH_FIELD_CHANGE,
    SELECT_EMPLOYEE,
    SELECT_DEPARTMENT,
    UNSELECT_ALL,
    ROUTE_TO_DEPARTMENT,
    MOVE_TO_DEPARTMENT,
    MOVE_TO_DEPARTMENT_CLOSE,
    NEW_DEPARTMENT,
    DELETE,
}

export interface InitDataAction {
    readonly type: EmployeeSelectActionTypes.INIT_DATA
    readonly settings: EmployeeSelectSettings
    readonly employees: EmployeeItemEntity[]
    readonly departments: DepartmentEntity[]
<<<<<<< Updated upstream
    readonly alreadySelectedEmployeeIds: number[]
=======
    readonly isEditable: boolean
>>>>>>> Stashed changes
}

export interface SearchFieldChangeAction {
    readonly type: EmployeeSelectActionTypes.SEARCH_FIELD_CHANGE
    readonly str: string
}

export interface SelectEmployeeAction {
    readonly type: EmployeeSelectActionTypes.SELECT_EMPLOYEE
    readonly employee: EmployeeItemEntity
}

export interface SelectDepartmentAction {
    readonly type: EmployeeSelectActionTypes.SELECT_DEPARTMENT
    readonly department: DepartmentEntity
}

export interface UnselectAllAction {
    readonly type: EmployeeSelectActionTypes.UNSELECT_ALL
}

export interface MoveToDepartmentAction {
    readonly type: EmployeeSelectActionTypes.MOVE_TO_DEPARTMENT
}

export interface RouteToDepartmentAction {
    readonly type: EmployeeSelectActionTypes.ROUTE_TO_DEPARTMENT,
    readonly id: number
}

export interface MoveToDepartmentCloseAction {
    readonly type: EmployeeSelectActionTypes.MOVE_TO_DEPARTMENT_CLOSE
}

export interface NewDepartmentAction {
    readonly type: EmployeeSelectActionTypes.NEW_DEPARTMENT
}

export interface DeleteAction {
    readonly type: EmployeeSelectActionTypes.DELETE
}