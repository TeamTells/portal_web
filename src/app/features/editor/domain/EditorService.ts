import {LongreadDocument, Paragraph} from "./models/models";

export abstract class EditorService {

  abstract getDocumentBy(uid: string): LongreadDocument

}
