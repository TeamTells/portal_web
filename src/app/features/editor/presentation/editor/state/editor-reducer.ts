import {Reducer} from "../../../../../core/mvi/store";
import {EditorState} from "./editor-state";
import {EditorResultAction, EditorResultActionType} from "./editor-result-action";
import {Injectable} from "@angular/core";
import {clone} from "cloneable-ts";
import {DocumentParser} from "../../../domain/document-parser";
import {LongreadDocument, ParagraphTypeConsts, TextParagraph, TextSpan, TextStyle} from "../../../domain/models/models";
import {v4 as uuidv4} from 'uuid';
import {TextSpanStyle} from "./editor-action";
import {FontSize} from "../../../domain/style-const";

@Injectable({
  providedIn: 'root'
})
export class EditorReducer implements Reducer<EditorState, EditorResultAction> {

  constructor(
    private parser: DocumentParser,
  ) {
  }

  reduce(state: EditorState, action: EditorResultAction): EditorState {
    switch (action.type) {
      case EditorResultActionType.UPDATE_DOCUMENT:
        return this.updateDocument(state, action.document)

      case EditorResultActionType.ADD_TEXT_PARAGRAPH:
        return this.addTextParagraph(state)

      case EditorResultActionType.CHANGE_MENU_VISIBILITY:
        return this.changeMenuVisibility(state)

      case EditorResultActionType.CHANGE_LAST_SPAN_STYLE:
        return this.changeLastSpanStyle(state, action.style)
    }
  }

  private updateDocument(state: EditorState, newDocument: LongreadDocument): EditorState {
    return clone(state, {
      longreadDocument: newDocument,
      content: this.parser.parse(newDocument, state.isDropdownMenuVisibleSet)
    })
  }

  private addTextParagraph(state: EditorState): EditorState {
    const newDocument = clone(state.longreadDocument)

    const paragraph = {
      id: uuidv4(),
      type: "text",
      spans: [
        {
          id: uuidv4(),
          text: "<br>"
        }
      ]
    }
    newDocument.paragraphs.push(paragraph)

    return this.updateDocument(state, newDocument)
  }

  private changeMenuVisibility(state: EditorState): EditorState {
    return clone(state, {isDropdownMenuVisible: !state.isDropdownMenuVisible})
  }

  private changeLastSpanStyle(state: EditorState, style: TextSpanStyle): EditorState {
    const newState = clone(state, {isDropdownMenuVisible: false})
    const newDocument = newState.longreadDocument

    if (newDocument.paragraphs.length == 0) {
      return state
    }

    newDocument.paragraphs[newDocument.paragraphs.length - 1] = new TextParagraph(
      ParagraphTypeConsts.text,
      [
        new TextSpan(
          "",
          this.createStyle(style)
        )
      ]
    )

    return this.updateDocument(newState, newDocument)
  }

  private createStyle(style: TextSpanStyle): TextStyle | undefined {
    switch (style) {
      case TextSpanStyle.TEXT:
        return undefined
      case TextSpanStyle.HEADER_1:
        return new TextStyle(
          true,
          undefined,
          FontSize.SIZE_30
        )
      case TextSpanStyle.HEADER_2:
        return new TextStyle(
          true,
          undefined,
          FontSize.SIZE_24
        )
    }
  }

}
