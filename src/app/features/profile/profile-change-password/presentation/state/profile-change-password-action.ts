export type ChangePasswordAction = SetActualPasswordAction
    | SetNewPasswordAction
    | SetVerificationPasswordAction
    | SendOnVerificationAction;

export enum ChangePasswordActionType{
    SET_ACTUAL_PASSWORD,
    SET_NEW_PASSWORD,
    SET_VERIFICATION_PASSWORD,
    SEND_ON_VERIFICATION,
}

export interface SetActualPasswordAction{
    readonly type: ChangePasswordActionType.SET_ACTUAL_PASSWORD;
    readonly password: string;
}

export interface SetNewPasswordAction{
    readonly type: ChangePasswordActionType.SET_NEW_PASSWORD;
    readonly password: string;
}

export interface SetVerificationPasswordAction{
    readonly type: ChangePasswordActionType.SET_VERIFICATION_PASSWORD;
    readonly password: string;
}

export interface  SendOnVerificationAction{
    readonly type: ChangePasswordActionType.SEND_ON_VERIFICATION
}

