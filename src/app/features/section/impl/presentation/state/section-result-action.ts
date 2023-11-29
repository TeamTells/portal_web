import {SectionEntity} from "../../domain/section-entity";

export type SectionResultAction = UpdateSectionAction

export enum SectionResultActionTypes {
  UPDATE_SECTION
}

export interface UpdateSectionAction {
  readonly type: SectionResultActionTypes.UPDATE_SECTION
  readonly section: SectionEntity
}


