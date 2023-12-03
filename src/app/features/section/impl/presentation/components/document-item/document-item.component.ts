import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DocumentEntity} from "../../../domain/document-entity";

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.scss']
})

export class DocumentItemComponent {

  @Input() public document: DocumentEntity = {
    id: -1,
    title: "Not found document",
    updated: new Date(),
    documents: []
  };

  @Input() public level: number = 0

  @Output() arrowClicked = new EventEmitter<DocumentEntity>()

  constructor() {
  }

  getMarginOffset(): string {
    return this.level * 8 + 'px';
  }

}

