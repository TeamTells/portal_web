import {Injectable} from "@angular/core";
import {SectionEntity} from "../domain/section-entity";
import {SectionService} from "../domain/section-service";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SectionsResponseJson} from "./json/sections-response-json";
import {environment} from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SectionServiceImpl implements SectionService {

    private mutableSections: BehaviorSubject<Array<SectionEntity>> = new BehaviorSubject<Array<SectionEntity>>([])

    sections: Observable<Array<SectionEntity>> = this.mutableSections.asObservable()

    pages = {
        pages: [
            {id: 1, title: 'Паттерны проектирование', isFavorite: true},
            {id: 2, title: 'Строитель', isFavorite: false},
            {id: 3, title: 'Наблюдатель', isFavorite: false},
            {id: 4, title: 'Основы проиграммирование', isFavorite: false},
            {id: 5, title: 'Основы веб разработки', isFavorite: false}
        ]
    }

    constructor(private http: HttpClient) {

    }

    fetchSections() {
        this.http.get<SectionsResponseJson>(`${environment.apiUrl}/documentation/section/list`)
            .pipe(map(sectionResponse => {
                const listSection: Array<SectionEntity> = sectionResponse.sections.map(section => {
                    return new SectionEntity(
                        section.id,
                        section.title,
                        section.thumbnailUrl,
                        section.isFavorite
                    )
                })
                return listSection;
            })).subscribe(sections => {
            this.mutableSections.next(sections)
        })
    }

    createSection(section: SectionEntity) {
        const body = {
            title: section.title,
            thumbnailUrl: section.url
        }

        this.http.post<any>(`${environment.apiUrl}/documentation/section/create`, body)
            .subscribe(_ => {
                this.fetchSections()
            })
    }

    getSection(sectionId: number): SectionEntity | undefined {
        return undefined
    }

}
