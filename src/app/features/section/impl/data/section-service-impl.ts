import {SectionService} from "../domain/section-service";
import {SectionEntity} from "../domain/section-entity";
import {DocumentEntity} from "../domain/document-entity";
import {Constants} from "../presentation/common/Constants";
import {Observable, Subject} from "rxjs";

export class SectionServiceImpl extends SectionService {

  private tempId = 100
  private cashe = new SectionEntity(
    1,
    "Стандарты проектирования",
    "https://pngicon.ru/file/uploads/gory.png",
    [
      new DocumentEntity(
        1,
        "Стандарты первой категории",
        new Date(),
        [
          new DocumentEntity(
            2,
            "Правила наименования иконок",
            new Date(),
            []
          ),
          new DocumentEntity(
            3,
            "Правила наименования цветов",
            new Date(),
            []
          ),
          new DocumentEntity(
            4,
            "Стандарты второй категории",
            new Date(),
            [
              new DocumentEntity(
                5,
                "Правила наименования иконок 2",
                new Date(),
                []
              ),
              new DocumentEntity(
                5,
                "Правила наименования цветов 2",
                new Date(),
                []
              ),
            ]
          ),
        ]
      ),
      new DocumentEntity(
        6,
        "Правила работы 2023",
        new Date(),
        []
      ),
      new DocumentEntity(
        7,
        "Правила работы 2022",
        new Date(),
        []
      ),
    ]
  )

  private sectionSubject = new Subject<SectionEntity>()

  override fetchSection(sectionId: number) {
    this.sectionSubject.next(this.cashe)
  }

  override getSectionObservable(): Observable<SectionEntity> {
    return this.sectionSubject.asObservable()
  }

  override createDocument(sectionId: number, parentDocumentId: number) {
    if (parentDocumentId == Constants.NO_ID) {
      this.cashe.documents.push(new DocumentEntity(
        this.tempId,
        "Новый документ",
        new Date(),
        []
      ))
    }

    console.log("Create document with parentDocumentId " + parentDocumentId)
    this.tempId = this.tempId++
    this.fetchSection(sectionId)
  }

}
