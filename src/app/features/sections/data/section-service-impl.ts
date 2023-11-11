import {Injectable} from "@angular/core";
import {SectionEntity} from "../domain/section-entity";
import {SectionService} from "../domain/section-service";
import {environment} from "../../../enviroment";
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../../authorization/domain/user";

@Injectable({
  providedIn: 'root'
})
export class SectionServiceImpl implements SectionService {

  private sectionsSubject: BehaviorSubject<Array<SectionEntity> | null> = new BehaviorSubject<Array<SectionEntity> | null>(null)
  public sectionsObservable: Observable<Array<SectionEntity> | null> = this.sectionsSubject.asObservable()

  private sectionsCache: Array<SectionEntity> = []

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

  getSections(): Array<SectionEntity> {
    return this.http.get<Array<SectionEntity>>(`${environment.apiUrl}/documentation/section/list`)
      .pipe(map(sections => {
        this.userSubject.next(user);
        return user;
      }))
  }

  getSection(sectionId: number): SectionEntity | undefined {
    return this.fakeSections.find(section => {
      section.id == sectionId
    });
  }

}
