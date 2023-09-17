export type EditorAction = UpdateDocument |
  AddTextParagraph |
  ChangeMenuVisibility

export enum EditorActionType {
  UPDATE_DOCUMENT,
  ADD_TEXT_PARAGRAPH,
  CHANGE_MENU_VISIBILITY,
}

export interface UpdateDocument {
  readonly type: EditorActionType.UPDATE_DOCUMENT,
  readonly element: HTMLElement,
}

export interface AddTextParagraph {
  readonly type: EditorActionType.ADD_TEXT_PARAGRAPH
}

export interface ChangeMenuVisibility {
  readonly type: EditorActionType.CHANGE_MENU_VISIBILITY
}
