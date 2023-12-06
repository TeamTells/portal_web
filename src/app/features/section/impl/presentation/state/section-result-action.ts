import {SectionEntity} from "../../domain/section-entity";
import {SectionActionTypes} from "./section-action";

export type SectionResultAction = UpdateSectionAction
  | ChangeDocumentOpenStateAction
  | ChangeContentOpenStateAction

export enum SectionResultActionTypes {
  UPDATE_SECTION,
  CHANGE_DOCUMENT_OPEN_STATE,
  CHANGE_CONTENT_OPEN_STATE
}

export interface UpdateSectionAction {
  readonly type: SectionResultActionTypes.UPDATE_SECTION
  readonly section: SectionEntity
}

export interface ChangeDocumentOpenStateAction {
  readonly type: SectionResultActionTypes.CHANGE_DOCUMENT_OPEN_STATE
  readonly documentId: number
}

export interface ChangeContentOpenStateAction {
  readonly type: SectionResultActionTypes.CHANGE_CONTENT_OPEN_STATE
}


