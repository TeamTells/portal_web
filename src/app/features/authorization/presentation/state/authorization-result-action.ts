export type AuthorizationResultAction = ChangeEmailResultAction
    | ChangePasswordResultAction
    | EmailValidationResultAction

export enum AuthorizationResultActionTypes {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    EMAIL_VALIDATION_ERROR
}

export interface ChangeEmailResultAction {
    readonly type: AuthorizationResultActionTypes.CHANGE_EMAIL
    readonly email: string
}

export interface ChangePasswordResultAction {
    readonly type: AuthorizationResultActionTypes.CHANGE_PASSWORD
    readonly password: string
}

export interface EmailValidationResultAction {
    readonly type: AuthorizationResultActionTypes.EMAIL_VALIDATION_ERROR
    readonly error: string
}
