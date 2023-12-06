import {Injectable} from "@angular/core";
import {DocumentEntity} from "../../domain/document-entity";
import {Constants} from "../common/Constants";

@Injectable({
  providedIn: 'root'
})
export class SectionState {
  readonly id: number = Constants.NO_ID
  readonly title: string = ""
  readonly url: string = ""
  readonly documents: Array<DocumentEntity> = []
  readonly openDocuments: Array<number> = new Array<number>()
  readonly isOpen: boolean = true
}
