import {Paragraph} from "./models/models";

export abstract class EditorService {

  abstract getDocumentBy(uid: string): Array<Paragraph>

}
