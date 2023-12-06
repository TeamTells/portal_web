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
      case SectionResultActionTypes.CHANGE_DOCUMENT_OPEN_STATE:
        return this.changeDocumentOpenState(state, action.documentId)
      case SectionResultActionTypes.CHANGE_CONTENT_OPEN_STATE:
        return this.changeContentOpenState(state)
    }
  }

  private updateSection(state: SectionState, newSection: SectionEntity): SectionState {
    return clone(state, {
      documents: newSection.documents,
      title: newSection.title,
      id: newSection.id,
      url: newSection.thumbnailUrl
    })
  }

  private changeDocumentOpenState(state: SectionState, documentId: number): SectionState {
    if (state.openDocuments.find((id) => {
      return id == documentId
    }) == undefined) {
      const newOpenDocumentsSet = state.openDocuments
      newOpenDocumentsSet.push(documentId)
      return clone(state, {openDocuments: newOpenDocumentsSet})
    } else {
      const newOpenDocumentsSet = state.openDocuments.filter(itemDocumentId => {
        return itemDocumentId !== documentId
      })
      return clone(state, {openDocuments: newOpenDocumentsSet})
    }
  }

  private changeContentOpenState(state: SectionState): SectionState {
    return clone(state, {isOpen: !state.isOpen})
  }

}
