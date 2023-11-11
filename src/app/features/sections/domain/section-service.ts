import {SectionEntity} from "./section-entity";
import {Observable} from "rxjs";

export abstract class SectionService {

  abstract getSections(): Observable<Array<SectionEntity>>

  abstract getSection(sectionId: number): SectionEntity | undefined

}
