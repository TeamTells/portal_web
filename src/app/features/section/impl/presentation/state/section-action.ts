export type SectionAction = ChangeDocumentOpenStateAction

export enum SectionActionTypes {
  CHANGE_DOCUMENT_OPEN_STATE
}

export interface ChangeDocumentOpenStateAction {
  readonly type: SectionActionTypes.CHANGE_DOCUMENT_OPEN_STATE
  readonly documentId: number
}
