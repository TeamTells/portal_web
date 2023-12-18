import {DocumentDataModel} from "./model-types";

export abstract class Editor2Service {

    abstract getDocumentBy(uid: string): DocumentDataModel

}
