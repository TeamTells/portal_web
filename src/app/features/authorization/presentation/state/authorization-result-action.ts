
export type AuthorizationResultAction = ChangeEmailResultAction | ChangePasswordResultAction

export enum AuthorizationResultActionTypes {
    CHANGE_EMAIL,
    CHANGE_PASSWORD
}

export interface ChangeEmailResultAction {
    readonly type: AuthorizationResultActionTypes.CHANGE_EMAIL
    readonly email: string
}

export interface ChangePasswordResultAction {
    readonly type: AuthorizationResultActionTypes.CHANGE_PASSWORD
    readonly password: string
}
