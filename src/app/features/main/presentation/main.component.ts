import {Component} from '@angular/core';
import {Store} from "../../../core/mvi/store";
import {MainState, NavItem} from "./state/main-state";
import {MainExecutor} from "./state/main-executor";
import {MainAction, MainActionTypes} from "./state/main-action";
import {MainResultAction} from "./state/main-result-action";
import {MainReducer} from "./state/main-reducer";


@Component({
  selector: 'app-presentation',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends Store<MainState, MainExecutor, MainAction, MainResultAction> {
  
  constructor(
    state: MainState,
    executor: MainExecutor,
    reducer: MainReducer,
  ) {
    super(state, executor, reducer);
  }
  
  protected readonly MainActionTypes = MainActionTypes;
  protected readonly NavItem = NavItem;
}
