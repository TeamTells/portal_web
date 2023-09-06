import {LongreadDocument} from "../../../domain/models/models";

export type EditorResultAction = UpdateDocumentResult | ModifyTextParagraphResult

export enum EditorResultActionType {
    UPDATE_DOCUMENT = 0,
    MODIFY_TEXT_PARAGRAPH = 1
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
