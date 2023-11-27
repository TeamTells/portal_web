import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SectionState {
    readonly id: number = -1
    readonly title: string = ""
    readonly url: string = ""
    readonly isAllPagesSelected: boolean = false
    readonly documents: Array<DocumentState> = []
    readonly isOpen: boolean = false
}

export class DocumentState {

  constructor(
    readonly id: number,
    readonly title: string,
    readonly isOpen: boolean,
    readonly documents: Array<DocumentState>
  ) {
  }

}
