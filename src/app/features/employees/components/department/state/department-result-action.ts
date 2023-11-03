export type DepartmentResultAction = ChangeVisibilityContentResultAction 
    | GetCountEmployeesAction

export enum DepartmentResultActionTypes {
    CHANGE_VISIBILITY,
    GET_COUNT_EMPLOYEES
}

export interface ChangeVisibilityContentResultAction {
    readonly type: DepartmentResultActionTypes.CHANGE_VISIBILITY
    readonly visibilityContent: boolean
}

export interface GetCountEmployeesAction {
    readonly type: DepartmentResultActionTypes.GET_COUNT_EMPLOYEES
    readonly countEmployees: number;
}