import {SectionEntity} from "./section-entity";

export abstract class SectionService {

  abstract getSection(sectionId: number): SectionEntity

}
