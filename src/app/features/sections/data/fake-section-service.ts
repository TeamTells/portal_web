import {Injectable} from "@angular/core";
import {SectionEntity} from "../domain/section-entity";
import {SectionRepository} from "../domain/section-repository";

@Injectable({
  providedIn: 'root'
})
export class FakeSectionService implements SectionRepository {

  private fakeSections: Array<SectionEntity> = [
    {id: 1, title: 'Программирование и разработка ПО', url: 'https://pngicon.ru/file/uploads/gory.png'},
    {id: 2, title: 'Правила поведения в нашей столовой', url: 'https://pngicon.ru/file/uploads/gory.png'},
    {id: 3, title: 'Списки проведение спортивных занятий', url: 'https://pngicon.ru/file/uploads/gory.png'}
  ]

  pages = {
    pages: [
      {id: 1, title: 'Паттерны проектирование', isFavorite: true},
      {id: 2, title: 'Строитель', isFavorite: false},
      {id: 3, title: 'Наблюдатель', isFavorite: false},
      {id: 4, title: 'Основы проиграммирование', isFavorite: false},
      {id: 5, title: 'Основы веб разработки', isFavorite: false}
    ]
  }

  getSections(): Array<SectionEntity> {
    return this.fakeSections
  }

  getSection(sectionId: number): SectionEntity | undefined {
    return this.fakeSections.find(section => {
      section.id == sectionId
    });
  }

}
