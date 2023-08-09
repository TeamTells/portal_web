import {Component} from '@angular/core';
import {AuthorizationState} from "./state/authorization-state";
import {Store} from "../../../core/mvi/store";
import {AuthorizationExecutor} from "./state/authorization-executor";
import {AuthorizationAction, AuthorizationActionTypes} from "./state/authorization-action";
import {AuthorizationResultAction} from "./state/authorization-result-action";
import {AuthorizationReducer} from "./state/authorization-reducer";

@Component({
    selector: 'app-authorization',
    templateUrl: './authorization.component.html',
    styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent extends Store<AuthorizationState, AuthorizationExecutor, AuthorizationAction, AuthorizationResultAction> {

  constructor(
    state: AuthorizationState,
    executor: AuthorizationExecutor,
    reducer: AuthorizationReducer
  ) {
    super(state, executor, reducer);
  }

    protected readonly AuthorizationActionTypes = AuthorizationActionTypes;
}
