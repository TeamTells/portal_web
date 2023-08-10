export type AuthorizationAction = ChangeEmailAction
    | ChangePasswordAction
    | LoginAction

export enum AuthorizationActionTypes {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    LOGIN
}

export interface ChangeEmailAction {
    readonly type: AuthorizationActionTypes.CHANGE_EMAIL
    readonly email: string
}

export interface ChangePasswordAction {
    readonly type: AuthorizationActionTypes.CHANGE_PASSWORD
    readonly password: string
}

export interface LoginAction {
    readonly type: AuthorizationActionTypes.LOGIN
}
