import {Executor, Reducer} from "../../../../../core/mvi/store";
import {EditorState} from "./editor-state";
import {EditorAction, EditorActionType} from "./editor-action";
import {EditorResultAction, EditorResultActionType} from "./editor-result-action";
import {Injectable} from "@angular/core";
import {EditorService} from "../../../domain/EditorService";
import {HtmlDocumentParser} from "../../../domain/html-document-parser";

@Injectable({
  providedIn: 'root'
})
export class EditorExecutor extends Executor<EditorState, EditorAction, EditorResultAction> {

  constructor(
    private editorService: EditorService,
    private htmlDocumentParser: HtmlDocumentParser
  ) {
    super()
  }

  override init(reducer: Reducer<EditorState, EditorResultAction>, getState: () => EditorState, onReduced: (state: EditorState) => void) {
    super.init(reducer, getState, onReduced);

    const document = this.editorService.getDocumentBy("")
    this.reduce({type: EditorResultActionType.UPDATE_DOCUMENT, document: document})
  }

  execute(action: EditorAction): void {
    switch (action.type) {
      case EditorActionType.UPDATE_DOCUMENT:
        const document = this.htmlDocumentParser.parse(action.element)
        this.reduce(
          {
            type: EditorResultActionType.UPDATE_DOCUMENT,
            document: document
          }
        )
        break

      case EditorActionType.ADD_TEXT_PARAGRAPH:
        this.reduce(
          {
            type: EditorResultActionType.ADD_TEXT_PARAGRAPH
          }
        )
        break

      case EditorActionType.CHANGE_MENU_VISIBILITY:
        this.reduce(
          {
            type: EditorResultActionType.CHANGE_MENU_VISIBILITY
          }
        )
    }
  }

}
