import {LongreadDocument} from "../../../domain/models/models";
import {TextSpanStyle} from "./editor-action";

export type EditorResultAction = UpdateDocumentResult |
    AddTextParagraph |
    ChangeMenuVisibility |
    ChangeLastTextSpanStyle |
    ChangeFocusedParagraphIdResult

export enum EditorResultActionType {
    UPDATE_DOCUMENT,
    ADD_TEXT_PARAGRAPH,
    CHANGE_MENU_VISIBILITY,
    CHANGE_LAST_SPAN_STYLE,
    CHANGE_FOCUSED_PARAGRAPH_ID
}

export interface UpdateDocumentResult {
    readonly type: EditorResultActionType.UPDATE_DOCUMENT,
    readonly document: LongreadDocument
}

export interface AddTextParagraph {
    readonly type: EditorResultActionType.ADD_TEXT_PARAGRAPH
}

export interface ChangeMenuVisibility {
    readonly type: EditorResultActionType.CHANGE_MENU_VISIBILITY
}

export interface ChangeLastTextSpanStyle {
    readonly type: EditorResultActionType.CHANGE_LAST_SPAN_STYLE
    readonly style: TextSpanStyle
}


export interface ChangeFocusedParagraphIdResult {
    readonly type: EditorResultActionType.CHANGE_FOCUSED_PARAGRAPH_ID
    readonly focusedParagraphId: string
}
