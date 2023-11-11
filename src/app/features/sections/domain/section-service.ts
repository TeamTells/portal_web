import {SectionEntity} from "./section-entity";

export abstract class SectionService {

  abstract getSections(): Array<SectionEntity>

  abstract getSection(sectionId: number): SectionEntity | undefined

}
