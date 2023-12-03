import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DocumentEntity} from "../../../domain/document-entity";
import {DepartmentEntity} from "../../../../../employees/components/department/department.component";

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

  @Input() public openDocuments: Array<number> = new Array<number>()

  @Input() public level: number = 0

  @Output() arrowClicked: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }

  getMarginOffset(): string {
    return this.level * 8 + 'px';
  }

  isOpen(documentId: number): boolean {
    return this.openDocuments.find((id) => {
      return id == documentId
    }) != undefined
  }

  onArrowClicked(departmentId: number): void
  {
    console.log(departmentId)
    this.arrowClicked.emit(departmentId)
  }


}

