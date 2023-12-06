import {SectionEntity} from "./section-entity";
import {Observable} from "rxjs";

export abstract class SectionService {

  abstract fetchSection(sectionId: number): void

  abstract getSectionObservable(): Observable<SectionEntity>

  abstract createDocument(sectionId: number, parentDocumentId: number): void

}
