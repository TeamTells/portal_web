import {Injectable} from "@angular/core";
import {DocumentEntity} from "../../domain/document-entity";

@Injectable({
  providedIn: 'root'
})
export class SectionState {
  readonly id: number = SectionState.NO_ID
  readonly title: string = ""
  readonly url: string = ""
  readonly isAllPagesSelected: boolean = false
  readonly documents: Array<DocumentEntity> = []
  readonly openDocuments: Set<number> = new Set<number>
  readonly isOpen: boolean = false

  static NO_ID = -1
}
