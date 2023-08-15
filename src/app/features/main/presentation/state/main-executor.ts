import {Executor} from "../../../../core/mvi/store";
import {MainState} from "./main-state";
import {MainAction, MainActionTypes} from "./main-action";
import {MainResultAction, MainResultActionTypes} from "./main-result-action";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MainExecutor extends Executor<MainState, MainAction, MainResultAction> {

  constructor() {
    super();
  }

  execute(action: MainAction) {
    switch (action.type) {
      case MainActionTypes.SELECT_ITEM:
        this.reduce({
          type: MainResultActionTypes.SELECT_ITEM,
          item: action.item
        })
        break
    }
  }

}
