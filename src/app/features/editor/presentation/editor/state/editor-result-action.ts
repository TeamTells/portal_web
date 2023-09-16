import {LongreadDocument} from "../../../domain/models/models";

export type EditorResultAction = UpdateDocumentResult |
  AddTextParagraph

export enum EditorResultActionType {
  UPDATE_DOCUMENT,
  ADD_TEXT_PARAGRAPH,
}

export interface UpdateDocumentResult {
  readonly type: EditorResultActionType.UPDATE_DOCUMENT,
  readonly document: LongreadDocument
}

export interface AddTextParagraph {
  readonly type: EditorResultActionType.ADD_TEXT_PARAGRAPH
}
