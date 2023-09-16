export type EditorAction = UpdateDocument |
  AddTextParagraph

export enum EditorActionType {
  UPDATE_DOCUMENT,
  ADD_TEXT_PARAGRAPH,
}

export interface UpdateDocument {
  readonly type: EditorActionType.UPDATE_DOCUMENT,
  readonly element: HTMLElement,
}

export interface AddTextParagraph {
  readonly type: EditorActionType.ADD_TEXT_PARAGRAPH
}
