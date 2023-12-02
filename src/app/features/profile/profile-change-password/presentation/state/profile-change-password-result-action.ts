export type ChangePasswordResultAction =  SetActualPasswordResultAction
    | SetNewPasswordResultAction
    | SetVerificationPasswordResultAction
    | SendOnVerificationResultAction
    | VerificationErrorResultAction;

export enum ChangePasswordResultActionType{
    SET_ACTUAL_PASSWORD,
    SET_NEW_PASSWORD,
    SET_VERIFICATION_PASSWORD,
    SEND_ON_VERIFICATION,
    VERIFICATION_ERROR,
}
export interface SetActualPasswordResultAction{
    readonly type: ChangePasswordResultActionType.SET_ACTUAL_PASSWORD;
    readonly password: string;
}

export interface SetNewPasswordResultAction{
    readonly type: ChangePasswordResultActionType.SET_NEW_PASSWORD;
    readonly password: string;
}

export interface SetVerificationPasswordResultAction{
    readonly type: ChangePasswordResultActionType.SET_VERIFICATION_PASSWORD;
    readonly password: string;
}


export interface SendOnVerificationResultAction{
    readonly type: ChangePasswordResultActionType.SEND_ON_VERIFICATION;
    readonly error: string | null;
}


export interface VerificationErrorResultAction{
    readonly type: ChangePasswordResultActionType.VERIFICATION_ERROR,
    readonly actualPasswordError: string | null;
    readonly newPasswordError: string | null;
    readonly verificationPasswordError: string | null;
}