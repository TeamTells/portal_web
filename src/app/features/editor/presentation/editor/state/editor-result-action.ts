import {LongreadDocument} from "../../../domain/models/models";

export type EditorResultAction = UpdateDocumentResult |
  ModifyTextParagraphResult |
  AddTextParagraph |
  ModifyTitleResult |
  RemoveParagraphResult

export enum EditorResultActionType {
  UPDATE_DOCUMENT,
  MODIFY_TEXT_PARAGRAPH,
  ADD_TEXT_PARAGRAPH,
  MODIFY_TITLE,
  REMOVE_TEXT_SPAN
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

export interface RemoveParagraphResult {
  readonly type: EditorResultActionType.REMOVE_TEXT_SPAN,
  readonly paragraphId: string,
  readonly spanId: string
}
