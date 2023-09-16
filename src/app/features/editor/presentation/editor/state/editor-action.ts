export type EditorAction = ModifyTextParagraph |
  AddTextParagraph |
  ModifyTitle |
  RemoveParagraph

export enum EditorActionType {
  MODIFY_TEXT_PARAGRAPH,
  ADD_TEXT_PARAGRAPH,
  MODIFY_TITLE ,
  REMOVE_TEXT_SPAN
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

export interface RemoveParagraph {
  readonly type: EditorActionType.REMOVE_TEXT_SPAN,
  readonly paragraphId: string,
  readonly spanId: string
}
