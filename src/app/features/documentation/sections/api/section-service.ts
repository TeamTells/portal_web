import {SectionSummaryEntity} from "./section-summary-entity";
import {Observable} from "rxjs";

export abstract class SectionService {

    abstract sections: Observable<Array<SectionSummaryEntity>>

    abstract fetchSections(): void

    abstract createSection(section: SectionSummaryEntity): void

    abstract updateIsFavoriteSection(sectionId: number, isFavorite: boolean): void

}
