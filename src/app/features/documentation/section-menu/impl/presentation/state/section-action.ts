export type SectionAction = ChangeDocumentOpenStateAction
    | ChangeContentOpenStateAction
    | CreateDocumentAction
    | OpenContent
    | OpenSettings

export enum SectionActionTypes {
    CHANGE_DOCUMENT_OPEN_STATE,
    CHANGE_CONTENT_OPEN_STATE,
    CREATE_DOCUMENT,
    OPEN_CONTENT,
    OPEN_SETTINGS,
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

export interface OpenContent {
    readonly type: SectionActionTypes.OPEN_CONTENT
}

export interface OpenSettings {
    readonly type: SectionActionTypes.OPEN_SETTINGS
}
