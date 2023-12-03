import {SectionService} from "../domain/section-service";
import {SectionEntity} from "../domain/section-entity";
import {DocumentEntity} from "../domain/document-entity";

export class SectionServiceImpl extends SectionService {

  getSection(sectionId: number): SectionEntity {
    return new SectionEntity(
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
  }

}
