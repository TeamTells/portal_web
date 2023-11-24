export type ChangePasswordResultAction =  SetActualPasswordResultAction
    | SetNewPasswordResultAction
    | SetVerificationPasswordResultAction
    | SendOnVerificationResultAction
    | ChangePasswordErrorAction;

export enum ChangePasswordResultActionType{
    SET_ACTUAL_PASSWORD,
    SET_NEW_PASSWORD,
    SET_VERIFICATION_PASSWORD,
    SEND_ON_VERIFICATION,
    CHANGE_PASSWORD_ERROR,
}
/*
 Стоит передавать либо ошибку в виде string? либо в виде енума. Почему? 
 Тупо проверять валидность пароля при отправке, так же тупо проверять валидность нового пароля при отправке,
 а проверочный пароль вообще проверять тупо, он нужен для сверки нового пароля. Тем более когда проверка одного зависит от другого.
 Ошибки надо передавать вместе с паролем, по тому что передавать их раздельно может нарушать логику. Например при передаче только нового 
 верного пароля нужно что то делать с ошибкой, тк новый пароль будет осоциироваться с этой ошибкой и в таком случае ошибку стоит обнулять.
 Однако в таком случает при передаче только пароля через экшн нужно передавть и ошибку, связанную с ним если такая появиться,
 для чего нужно обработать ещё один экшн, что выглядит вроде логично но даёт место для нарушения логикив виде записи сначала ошибки
 а затем обнуления её записью пароля.

 С другой стороны это оставляет место для оссоциации пароля с любой ошибкой, так что возможно стоит выделить какие то конкретные ошибки и передавать их

 Надо короче асоциировать ошибку с конкретным паролем и с конкретным полем
*/
export interface SetActualPasswordResultAction{
    readonly type: ChangePasswordResultActionType.SET_ACTUAL_PASSWORD;
    readonly password: string;
    readonly error: string | null;
}

export interface SetNewPasswordResultAction{
    readonly type: ChangePasswordResultActionType.SET_NEW_PASSWORD;
    readonly password: string;
    readonly error: string | null;
}

export interface SetVerificationPasswordResultAction{
    readonly type: ChangePasswordResultActionType.SET_VERIFICATION_PASSWORD;
    readonly password: string;
    readonly error: string | null;
}


export interface SendOnVerificationResultAction{
    readonly type: ChangePasswordResultActionType.SEND_ON_VERIFICATION;
    readonly error: string | null;
    
}

export interface ChangePasswordErrorAction{
    readonly type: ChangePasswordResultActionType.CHANGE_PASSWORD_ERROR;
    readonly error: string | null;
}