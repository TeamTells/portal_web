import {SectionSummaryEntity} from "../../../sections/api/section-summary-entity";
import {DocumentEntity} from "./document-entity";

export class SectionEntity {

  constructor(
    readonly id: number,
    readonly title: string,
    readonly url: string,
    readonly document: Array<DocumentEntity>
  ) {
  }

}
