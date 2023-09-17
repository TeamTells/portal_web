import {LongreadDocument} from "../../../domain/models/models";

export type EditorResultAction = UpdateDocumentResult |
  AddTextParagraph |
  ChangeMenuVisibility

export enum EditorResultActionType {
  UPDATE_DOCUMENT,
  ADD_TEXT_PARAGRAPH,
  CHANGE_MENU_VISIBILITY
}

export interface UpdateDocumentResult {
  readonly type: EditorResultActionType.UPDATE_DOCUMENT,
  readonly document: LongreadDocument
}

export interface AddTextParagraph {
  readonly type: EditorResultActionType.ADD_TEXT_PARAGRAPH
}

export interface ChangeMenuVisibility {
  readonly type: EditorResultActionType.CHANGE_MENU_VISIBILITY
}
