import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DocumentEntity} from "../../../domain/document-entity";

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['../../common/section.component.scss']
})

export class DocumentItemComponent {

  @Input() public document: DocumentEntity = {
    id: -1,
    title: "Not found document",
    updated: new Date(),
    documents: []
  };

  @Input() public openDocuments: Array<number> = new Array<number>()

  @Input() public level: number = 0

  @Output() arrowClicked: EventEmitter<number> = new EventEmitter<number>()

  @Output() createDocumentClicked: EventEmitter<number> = new EventEmitter<number>()

  @Output() openDocumentClicked: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }

  isOpen(documentId: number): boolean {
    return this.openDocuments.find((id) => {
      return id == documentId
    }) != undefined
  }

  onArrowClicked(documentId: number): void {
    this.arrowClicked.emit(documentId)
  }

  onCreateDocumentClicked(parentDocumentId: number): void {
    this.createDocumentClicked.emit(parentDocumentId)
  }

  onOpenDocumentClicked(documentId: number): void {
    this.openDocumentClicked.emit(documentId)
  }


}

