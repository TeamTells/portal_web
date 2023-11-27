export class DocumentEntity {

  constructor(
    readonly id: number,
    readonly title: string,
    readonly updated: Date,
    readonly documents: Array<DocumentEntity>
  ) {
  }

}
