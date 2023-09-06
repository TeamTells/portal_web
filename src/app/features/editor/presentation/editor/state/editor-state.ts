import {Injectable} from "@angular/core";
import {LongreadDocument} from "../../../domain/models/models";

@Injectable({
  providedIn: 'root'
})
export class EditorState {
  readonly document: LongreadDocument = new LongreadDocument([])
  readonly content: string = ""
}
