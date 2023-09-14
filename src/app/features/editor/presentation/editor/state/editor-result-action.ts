import {LongreadDocument} from "../../../domain/models/models";
import {EditorActionType} from "./editor-action";

export type EditorResultAction = UpdateDocumentResult |
  ModifyTextParagraphResult |
  AddTextParagraph |
  ModifyTitleResult

export enum EditorResultActionType {
  UPDATE_DOCUMENT = 0,
  MODIFY_TEXT_PARAGRAPH = 1,
  ADD_TEXT_PARAGRAPH = 2,
  MODIFY_TITLE = 3
}

export interface UpdateDocumentResult {
  readonly type: EditorResultActionType.UPDATE_DOCUMENT,
  readonly document: LongreadDocument
}

export interface ModifyTextParagraphResult {
  readonly type: EditorResultActionType.MODIFY_TEXT_PARAGRAPH,
  readonly value: string,
  readonly paragraphId: string,
  readonly spanId: string
}

export interface AddTextParagraph {
  readonly type: EditorResultActionType.ADD_TEXT_PARAGRAPH
}

export interface ModifyTitleResult {
  readonly type: EditorResultActionType.MODIFY_TITLE,
  readonly value: string
}
