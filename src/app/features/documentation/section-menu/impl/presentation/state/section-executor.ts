import {Injectable} from "@angular/core";
import {SectionState} from "./section-state";
import {SectionAction, SectionActionTypes} from "./section-action";
import {SectionResultAction, SectionResultActionTypes} from "./section-result-action";
import {SectionService} from "../../domain/section-service";
import {Executor, Reducer} from "../../../../../../core/mvi/store";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SectionExecutor extends Executor<SectionState, SectionAction, SectionResultAction> {

  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService
  ) {
    super();
  }

  override init(reducer: Reducer<SectionState, SectionResultAction>, getState: () => SectionState, onReduced: (state: SectionState) => void) {
    super.init(reducer, getState, onReduced);

    this.sectionService.getSectionObservable().subscribe((section) => {
      this.reduce({
        type: SectionResultActionTypes.UPDATE_SECTION,
        section: section
      })
    })

    this.route.paramMap.subscribe((params: any) => {
      const sectionId = +params.get('id');
      this.sectionService.fetchSection(sectionId)
    })
  }

  execute(action: SectionAction) {
    switch (action.type) {
      case SectionActionTypes.CHANGE_DOCUMENT_OPEN_STATE:
        this.reduce({
          type: SectionResultActionTypes.CHANGE_DOCUMENT_OPEN_STATE,
          documentId: action.documentId
        })
        break

      case SectionActionTypes.CHANGE_CONTENT_OPEN_STATE:
        this.reduce(
          {
            type: SectionResultActionTypes.CHANGE_CONTENT_OPEN_STATE
          }
        )
        break

      case SectionActionTypes.CREATE_DOCUMENT:
        this.sectionService.createDocument(this.getState().id, action.rootDocumentId)
        break
    }
  }

}
