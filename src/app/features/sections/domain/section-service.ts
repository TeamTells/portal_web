import {SectionEntity} from "./section-entity";
import {Observable} from "rxjs";

export abstract class SectionService {

    abstract sections: Observable<Array<SectionEntity>>

    abstract fetchSections(): void

    abstract createSection(section: SectionEntity): void

    abstract getSection(sectionId: number): SectionEntity | undefined

    abstract updateIsFavoriteSection(sectionId: number, isFavorite: boolean): void

}
