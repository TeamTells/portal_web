import {Reducer} from "../../../../core/mvi/store";
import {AuthorizationState} from "./authorization-state";
import {AuthorizationResultAction} from "./authorization-result-action";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizationReducer implements Reducer<AuthorizationState, AuthorizationResultAction> {

  reduce(state: AuthorizationState, action: AuthorizationResultAction): AuthorizationState {
    return state;
  }

}
