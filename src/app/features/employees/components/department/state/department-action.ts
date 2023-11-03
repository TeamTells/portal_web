import { DepartmentEntity } from "../department.component"

export type DepartmentAction = ChangeVisibilityContentAction
    | GoToInfoAction
    | GetCountEmployeesAction
    
export enum DepartmentActionTypes {
    CHANGE_VISIBILITY,
    GO_TO_INFO,
    GET_COUNT_EMPLOYEES
}

export interface ChangeVisibilityContentAction {
    readonly type: DepartmentActionTypes.CHANGE_VISIBILITY
}

export interface GoToInfoAction {
    readonly type: DepartmentActionTypes.GO_TO_INFO
    readonly id: number
}

export interface GetCountEmployeesAction {
    readonly type: DepartmentActionTypes.GET_COUNT_EMPLOYEES
    readonly department: DepartmentEntity
}
