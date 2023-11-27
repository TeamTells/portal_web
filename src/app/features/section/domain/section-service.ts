import {SectionEntity} from "./section-entity";

abstract class SectionService {

  abstract getSection(sectionId: number): SectionEntity

}
