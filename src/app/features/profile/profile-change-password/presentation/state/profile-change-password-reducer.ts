import { Injectable } from "@angular/core";
import { ChangePasswordState } from "./profile-change-password-state";
import { ChangePasswordResultAction, ChangePasswordResultActionType} from "./profile-change-password-result-action";
import { Reducer} from "src/app/core/mvi/store";
import { clone } from "cloneable-ts";

@Injectable({
        providedIn: "root",
    })
export class ChangePasswordReducer implements Reducer<ChangePasswordState, ChangePasswordResultAction>{
    reduce(state: ChangePasswordState, action: ChangePasswordResultAction): ChangePasswordState {
        switch (action.type){
            case ChangePasswordResultActionType.SET_ACTUAL_PASSWORD:

                return clone(state,{actualPassword:action.password, actualPasswordError: "",});
            case ChangePasswordResultActionType.SET_NEW_PASSWORD:
                return clone(state,{newPassword:action.password, newPasswordError: "",});
            case ChangePasswordResultActionType.SET_VERIFICATION_PASSWORD:
                return clone(state,{verificationPassword: action.password, verificationPasswordError: "",});
            case ChangePasswordResultActionType.SEND_ON_VERIFICATION:
                // TODO: добавить ошибки, связанные с верификацией
                return clone(state,{error: action.error == null?"":action.error});
            case ChangePasswordResultActionType.VERIFICATION_ERROR:
                return clone(state,{
                    verificationPasswordError: action.verificationPasswordError == null  ? "" : action.verificationPasswordError,
                    newPasswordError: action.newPasswordError == null ? "" : action.newPasswordError,
                    actualPasswordError: action.actualPasswordError == null ? "" : action.actualPasswordError,
                });
        }
    }

}
