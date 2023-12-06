export type SectionAction = ChangeDocumentOpenStateAction
  | ChangeContentOpenStateAction

export enum SectionActionTypes {
  CHANGE_DOCUMENT_OPEN_STATE,
  CHANGE_CONTENT_OPEN_STATE
}

export interface ChangeDocumentOpenStateAction {
  readonly type: SectionActionTypes.CHANGE_DOCUMENT_OPEN_STATE
  readonly documentId: number
}

export interface ChangeContentOpenStateAction {
  readonly type: SectionActionTypes.CHANGE_CONTENT_OPEN_STATE
}
