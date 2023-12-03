import {SectionEntity} from "../../domain/section-entity";
import {SectionActionTypes} from "./section-action";

export type SectionResultAction = UpdateSectionAction
  | ChangeDocumentOpenStateAction

export enum SectionResultActionTypes {
  UPDATE_SECTION,
  CHANGE_DOCUMENT_OPEN_STATE
}

export interface UpdateSectionAction {
  readonly type: SectionResultActionTypes.UPDATE_SECTION
  readonly section: SectionEntity
}

export interface ChangeDocumentOpenStateAction {
  readonly type: SectionResultActionTypes.CHANGE_DOCUMENT_OPEN_STATE
  readonly documentId: number
}


