import { Inject, Injectable } from "@angular/core";
import { Executor } from "src/app/core/mvi/store";
import { ChangePasswordState } from "./profile-change-password-state";
import { ChangePasswordAction, ChangePasswordActionType } from "./profile-change-password-action";
import { ChangePasswordResultAction, ChangePasswordResultActionType } from "./profile-change-password-result-action";
import { Validator } from "src/app/core/validators/validator";
import { EmptyRule, MaxLengthRule, MinLengthRule } from "src/app/core/validators/rule";


@Injectable({
    providedIn: "root",
})
export class ChangePasswordExecutor extends Executor<ChangePasswordState, ChangePasswordAction, ChangePasswordResultAction>{

    private newPasswordValidator: Validator;
    private actualPasswordValidator: Validator;
    constructor(/*@Inject('PasswordValidatorForPasswordChange') private newPasswordValidator: Validator*/){
        super();
        this.newPasswordValidator = new Validator([
            new EmptyRule('Введите новый пароль'),
            new MinLengthRule('Пароль должен быть длиннее 8 символов',8),
            new MaxLengthRule('Пароль не может быть длиннее 25 символов',25),
          ]);
        this.actualPasswordValidator = new Validator([
            new EmptyRule('Введите пароль'),
            new MinLengthRule('Пароль должен быть длиннее 8 символов',8),
            new MaxLengthRule('Пароль не может быть длиннее 25 символов',25),
          ]);
    }

    override execute(action: ChangePasswordAction): void {
        switch (action.type) {
            case ChangePasswordActionType.SET_ACTUAL_PASSWORD:
                this.reduce(
                    {
                        type: ChangePasswordResultActionType.SET_ACTUAL_PASSWORD,
                        password: action.password,
                        error: this.actualPasswordValidator.validate(action.password),
                    }
                )
                break;
            case ChangePasswordActionType.SET_NEW_PASSWORD: 
                this.reduce(
                    {
                        type: ChangePasswordResultActionType.SET_NEW_PASSWORD,
                        password: action.password,
                        error: this.newPasswordValidator.validate(action.password),
                    }
                )
                break;
            case ChangePasswordActionType.SET_VERIFICATION_PASSWORD:
                if (this.getState().newPasswordError){
                    this.reduce({
                        type: ChangePasswordResultActionType.SET_VERIFICATION_PASSWORD,
                        password: action.password,
                        error: "Вы не ввели новый пароль",
                    })
                    return;
                }
                this.reduce({
                    type: ChangePasswordResultActionType.SET_VERIFICATION_PASSWORD,
                    password: action.password,
                    error: this.getState().newPassword == action.password ? "" : "Пароль не совпадает",
                })
                break;
            case ChangePasswordActionType.SEND_ON_VERIFICATION:
                if( 
                    this.getState().actualPasswordError.trim().length !== 0 ||
                    this.getState().newPasswordError.trim().length !== 0 ||
                    this.getState().verificationPasswordError.trim().length !== 0
                    ){
                    this.reduce({
                        type: ChangePasswordResultActionType.SEND_ON_VERIFICATION,
                        error: "Пожалуйста поправте предыдущие ошибки",
                    } );
                    return;
                }
                if( this.getState().actualPassword.trim().length === 0 || 
                    this.getState().newPassword.trim().length === 0 ||
                    this.getState().verificationPassword.trim().length === 0
                ){
                    this.reduce({
                        type: ChangePasswordResultActionType.SEND_ON_VERIFICATION,
                        error: "Пожалуйста заполните предыдущие поля",
                    } );
                    return;
                }
                this.reduce({
                    type: ChangePasswordResultActionType.SEND_ON_VERIFICATION,
                    error: null,
                } );
                // TODO: добавить отправку запроса на сервер
                // TODO: добавить обработку запроса
                break;
        }
    }
 
}