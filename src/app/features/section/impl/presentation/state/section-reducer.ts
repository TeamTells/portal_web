import {Injectable} from "@angular/core";
import {Reducer} from "../../../../../core/mvi/store";
import {SectionState} from "./section-state";
import {SectionResultAction, SectionResultActionTypes} from "./section-result-action";
import {clone} from "cloneable-ts";
import {SectionEntity} from "../../domain/section-entity";

@Injectable({
  providedIn: 'root'
})
export class SectionReducer implements Reducer<SectionState, SectionResultAction> {

  reduce(state: SectionState, action: SectionResultAction): SectionState {
    switch (action.type) {
      case SectionResultActionTypes.UPDATE_SECTION:
        return this.updateSection(state, action.section)
    }
  }

  private updateSection(state: SectionState, newSection: SectionEntity): SectionState {
    return clone(state, {
      documents: newSection.documents,
      title: newSection.title,
      id: newSection.id
    })
  }

}
