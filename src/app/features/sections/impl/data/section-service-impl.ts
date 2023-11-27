import {Injectable} from "@angular/core";
import {SectionSummaryEntity} from "../../api/section-summary-entity";
import {SectionService} from "../../api/section-service";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SectionsResponseJson} from "./json/sections-response-json";
import {environment} from "../../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SectionServiceImpl implements SectionService {

    private mutableSections: BehaviorSubject<Array<SectionSummaryEntity>> = new BehaviorSubject<Array<SectionSummaryEntity>>([])

    sections: Observable<Array<SectionSummaryEntity>> = this.mutableSections.asObservable()

    constructor(private http: HttpClient) {

    }

    fetchSections() {
        this.http.get<SectionsResponseJson>(`${environment.apiUrl}/documentation/section/list`)
            .pipe(map(sectionResponse => {
                const listSection: Array<SectionSummaryEntity> = sectionResponse.sections.map(section => {
                    return new SectionSummaryEntity(
                        section.id,
                        section.title,
                        section.thumbnailUrl,
                        section.isFavorite
                    )
                }).sort((sectionA, sectionB) => {
                    if (sectionA.title > sectionB.title) {
                        return 1;
                    }

                    if (sectionA.title < sectionB.title) {
                        return -1;
                    }

                    return 0;
                })
                return listSection;
            }))
            .subscribe(sections => {
            this.mutableSections.next(sections)
        })
    }

    createSection(section: SectionSummaryEntity) {
        const body = {
            title: section.title,
            thumbnailUrl: section.url
        }

        this.http.post<any>(`${environment.apiUrl}/documentation/section/create`, body)
            .subscribe(_ => {
                this.fetchSections()
            })
    }

    updateIsFavoriteSection(sectionId: number, isFavorite: boolean) {
        const body = {
            isFavorite: isFavorite,
            sectionId: sectionId
        }

        this.http.post<any>(`${environment.apiUrl}/documentation/section/favorite`, body)
            .subscribe(_ => {
                this.fetchSections()
            })
    }

    getSection(sectionId: number): SectionSummaryEntity | undefined {
        return undefined
    }

}
