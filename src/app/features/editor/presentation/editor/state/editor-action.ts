export type EditorAction = ModifyTextParagraph |
  AddTextParagraph |
  ModifyTitle

export enum EditorActionType {
  MODIFY_TEXT_PARAGRAPH = 0,
  ADD_TEXT_PARAGRAPH = 1,
  MODIFY_TITLE = 2,
  REMOVE
}

export interface ModifyTextParagraph {
  readonly type: EditorActionType.MODIFY_TEXT_PARAGRAPH,
  readonly value: string,
  readonly paragraphId: string,
  readonly spanId: string
}

export interface AddTextParagraph {
  readonly type: EditorActionType.ADD_TEXT_PARAGRAPH
}

export interface ModifyTitle {
  readonly type: EditorActionType.MODIFY_TITLE,
  readonly value: string
}
