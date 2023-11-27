import {Injectable} from "@angular/core";
import {Reducer} from "../../../../../core/mvi/store";
import {SectionState} from "./section-state";
import {SectionResultAction} from "./section-result-action";

@Injectable({
  providedIn: 'root'
})
export class SectionReducer implements Reducer<SectionState, SectionResultAction> {

  reduce(state: SectionState, action: SectionResultAction): SectionState {
    // switch (action.type) {
    //
    // }
    return state
  }

}
