import {Reducer} from "../../../../core/mvi/store";
import {MainState} from "./main-state";
import {MainResultAction, MainResultActionTypes} from "./main-result-action";
import {Injectable} from "@angular/core";
import {clone} from "cloneable-ts";

@Injectable({
  providedIn: 'root'
})
export class MainReducer implements Reducer<MainState, MainResultAction> {

  reduce(state: MainState, action: MainResultAction): MainState {
    switch (action.type) {
      case MainResultActionTypes.SELECT_ITEM:
        return clone(state, {selectedItem: action.item})

    }
  }

}
