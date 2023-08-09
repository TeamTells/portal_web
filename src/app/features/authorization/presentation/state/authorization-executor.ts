import {Executor} from "../../../../core/mvi/store";
import {AuthorizationState} from "./authorization-state";
import {AuthorizationAction} from "./authorization-action";
import {AuthorizationResultAction} from "./authorization-result-action";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationExecutor extends Executor<AuthorizationState, AuthorizationAction, AuthorizationResultAction> {

  execute(action: AuthorizationAction): void {
  }

}
