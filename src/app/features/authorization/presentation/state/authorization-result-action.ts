export type AuthorizationResultAction = ChangeEmailResultAction
    | ChangePasswordResultAction
    | ValidationResultAction

export enum AuthorizationResultActionTypes {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    VALIDATION_ERROR
}

export interface ChangeEmailResultAction {
    readonly type: AuthorizationResultActionTypes.CHANGE_EMAIL
    readonly email: string
}

export interface ChangePasswordResultAction {
    readonly type: AuthorizationResultActionTypes.CHANGE_PASSWORD
    readonly password: string
}

export interface ValidationResultAction {
    readonly type: AuthorizationResultActionTypes.VALIDATION_ERROR
    readonly emailError: string,
    readonly passwordError: string
}
