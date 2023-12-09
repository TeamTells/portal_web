import { Inject, Injectable } from "@angular/core";
import { Executor } from "src/app/core/mvi/store";
import { ChangePasswordState } from "./profile-change-password-state";
import { ChangePasswordAction, ChangePasswordActionType } from "./profile-change-password-action";
import { ChangePasswordResultAction, ChangePasswordResultActionType } from "./profile-change-password-result-action";
import { Validator } from "src/app/core/validators/validator";
import { EmptyRule, MaxLengthRule, MinLengthRule, Rule } from "src/app/core/validators/rule";

@Injectable({
    providedIn: "root",
})
export class ChangePasswordExecutor extends Executor<ChangePasswordState, ChangePasswordAction, ChangePasswordResultAction>{

    private newPasswordValidator: Validator;
    private actualPasswordValidator: Validator;
    constructor(){
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
                    }
                )
                break;
            case ChangePasswordActionType.SET_NEW_PASSWORD: 
                this.reduce({
                        type: ChangePasswordResultActionType.SET_NEW_PASSWORD,
                        password: action.password,
                    })
                break;
            case ChangePasswordActionType.SET_VERIFICATION_PASSWORD:
                this.reduce({
                    type: ChangePasswordResultActionType.SET_VERIFICATION_PASSWORD,
                    password: action.password,
                })
                break;
            case ChangePasswordActionType.SEND_ON_VERIFICATION:{
                    const actualPasswordError = this.actualPasswordValidator.validate(this.getState().actualPassword); 
                    const newPasswordError = this.newPasswordValidator.validate(this.getState().newPassword);
                    const verificationPasswordError =  (this.getState().newPassword == this.getState().verificationPassword && this.getState().newPassword.trim().length != 0) ? "" : "Новый пароль и подтверждающий пароль не совпадают. Пожалуста, убедитесь что вы всё ввели правмльно" ; //this.actualPasswordValidator.validate(this.getState().actualPassword);
                    if (actualPasswordError != null || 
                        newPasswordError != null || 
                        verificationPasswordError != null){
                        this.reduce({
                            type: ChangePasswordResultActionType.VERIFICATION_ERROR,
                            newPasswordError: newPasswordError,
                            verificationPasswordError: verificationPasswordError,
                            actualPasswordError: actualPasswordError,}
                        );
                        return;
                    }
                    this.reduce({
                        type: ChangePasswordResultActionType.SEND_ON_VERIFICATION,
                        error: null,
                    });
                }
                // TODO: добавить отправку запроса на сервер
                // TODO: добавить обработку запроса
                break;
        }
    }
}