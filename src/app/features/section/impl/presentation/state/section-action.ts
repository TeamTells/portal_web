export type SectionAction = ChangeDocumentOpenStateAction
  | ChangeContentOpenStateAction
  | CreateDocumentAction

export enum SectionActionTypes {
  CHANGE_DOCUMENT_OPEN_STATE,
  CHANGE_CONTENT_OPEN_STATE,
  CREATE_DOCUMENT
}

export interface ChangeDocumentOpenStateAction {
  readonly type: SectionActionTypes.CHANGE_DOCUMENT_OPEN_STATE
  readonly documentId: number
}

export interface ChangeContentOpenStateAction {
  readonly type: SectionActionTypes.CHANGE_CONTENT_OPEN_STATE
}

export interface CreateDocumentAction {
  readonly type: SectionActionTypes.CREATE_DOCUMENT
  readonly rootDocumentId: number
}
