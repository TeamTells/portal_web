import {SectionEntity} from "./section-entity";

export abstract class SectionRepository {

  abstract getSections(): Array<SectionEntity>

  abstract getSection(sectionId: number): SectionEntity | undefined

}
