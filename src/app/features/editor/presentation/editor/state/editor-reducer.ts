import {Reducer} from "../../../../../core/mvi/store";
import {EditorState} from "./editor-state";
import {EditorResultAction, EditorResultActionType} from "./editor-result-action";
import {Injectable} from "@angular/core";
import {clone} from "cloneable-ts";
import {DocumentParser} from "../../../domain/document-parser";
import {LongreadDocument, Paragraph, TextParagraph, TextSpan} from "../../../domain/models/models";
import {v4 as uuidv4} from 'uuid';

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

      case EditorResultActionType.MODIFY_TEXT_PARAGRAPH:
        return this.modifyTextParagraph(state, action.value, action.paragraphId, action.spanId)

      case EditorResultActionType.ADD_TEXT_PARAGRAPH:
        return this.addTextParagraph(state)

      case EditorResultActionType.MODIFY_TITLE:
        return this.modifyTitle(state, action.value)

      case EditorResultActionType.REMOVE_TEXT_SPAN:
        return this.removeTextSpan(state, action.paragraphId, action.spanId)

      case EditorResultActionType.ADD_TEXT_SPAN:
        return this.splitParagraph(state, action.value, action.paragraphId, action.spanId)
    }
  }

  private updateDocument(state: EditorState, newDocument: LongreadDocument): EditorState {
    return clone(state, {
      document: newDocument,
      content: this.parser.parse(newDocument)
    })
  }

  private modifyTextParagraph(
    state: EditorState,
    value: string,
    paragraphId: string,
    spanId: string
  ): EditorState {
    const newDocument = clone(state.document)
    const paragraph = newDocument.paragraphs
      .find((paragraph) => paragraph.id == paragraphId)

    if (paragraph == undefined || paragraph.type == "image") return state

    const textSpan = (paragraph as TextParagraph).spans
      .find((span) => span.id == spanId)

    if (textSpan == undefined) return state;

    textSpan.text = value

    return this.updateDocument(state, newDocument)
  }

  private removeTextSpan(
    state: EditorState,
    paragraphId: string,
    spanId: string
  ): EditorState {
    const newDocument = clone(state.document)
    newDocument.paragraphs = newDocument.paragraphs.filter((paragraph) => {
      if (paragraph.type == "text" && paragraph.id == paragraphId) {
        const textParagraph = (paragraph as TextParagraph)
        textParagraph.spans = textParagraph.spans.filter((span) => {
          return span.id != spanId
        })

        return textParagraph.spans.length != 0
      } else {
        return true
      }
    })

    return this.updateDocument(state, newDocument)
  }

  private splitParagraph(state: EditorState, value: string, paragraphId: string, spanId: string): EditorState {
    const newDocument = clone(state.document)
    const newParagraphs: Array<Paragraph> = []

    newDocument.paragraphs.forEach((paragraph) => {
      if (paragraph.id == paragraphId && paragraph.type == "text") {
        const oldParagraph = clone(paragraph, {
          id: uuidv4()
        })
        const newParagraph = clone(paragraph, {
          id: uuidv4()
        })

        newParagraphs.push(oldParagraph)
        newParagraphs.push(newParagraph)
      } else {
        newParagraphs.push(paragraph)
      }
    })

    newDocument.paragraphs = newParagraphs
    return this.updateDocument(state, newDocument)
  }

  private addTextParagraph(state: EditorState): EditorState {
    const newDocument = clone(state.document)

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

  private modifyTitle(state: EditorState, value: string): EditorState {
    const newDocument = clone(state.document, {
      title: value
    })

    return this.updateDocument(state, newDocument)
  }

}
