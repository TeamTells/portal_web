export type EditorAction = ModifyTextParagraph

export enum EditorActionType {
    MODIFY_TEXT_PARAGRAPH = 1
}

export interface ModifyTextParagraph {
    readonly type: EditorActionType.MODIFY_TEXT_PARAGRAPH,
    readonly value: string,
    readonly paragraphId: string,
    readonly spanId: string
}
