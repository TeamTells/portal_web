import {Injectable} from "@angular/core";
import {DocumentDataModel} from "../domain/model-types";
import {Editor2Service} from "../domain/editor-service";

const LOL: DocumentDataModel = [{"type":"heading-one","children":[{"text":"Hello mthrfuckers😊"}]},{"type":"heading-two","children":[{"text":"This is editable "},{"text":"rich","bold":true},{"text":"🤑 text,  "}]},{"type":"paragraph","children":[{"text":"<"},{"text":"textarea","bold":true},{"text":">"}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"take your bullets"}]},{"type":"bulleted-list","children":[{"type":"list-item","children":[{"text":"one bullet"}]},{"type":"list-item","children":[{"text":"two"}]},{"type":"list-item","children":[{"text":"three"}]}]},{"type":"paragraph","children":[{"text":"and numbers"}]},{"type":"numbered-list","children":[{"type":"list-item","children":[{"text":"test"}]},{"type":"list-item","children":[{"text":"test"}]},{"type":"list-item","children":[{"text":"hello","italic":true}]},{"type":"list-item","children":[{"text":"jkjbkbj","bold":true}]}]},{"type":"paragraph","children":[{"text":""}]},{"type":"paragraph","children":[{"text":"Goodbye mthrfuckers."}]},{"type":"paragraph","children":[{"text":""}],"isFake":true}]

const OLOLOL: DocumentDataModel = [
  {
    type: 'heading-one',
    children: [
      {text: 'The Slate Editor'},
    ],
  },
  {
    type: 'paragraph',
    children: [
      {text: 'This is editable '},
      {text: 'rich', bold: true},
      {text: ' text, '},
      {text: 'much', bold: true, italic: true},
      {text: ' better than a '},
    ],
  },
  {
    type: 'paragraph',
    children: [
      {text: '<textarea>'},
    ],
  },
  {
    type: 'paragraph',
    children: [
      {text: ''},
    ],
  },

];
@Injectable({
  providedIn: 'root'
})
export class Editor2ServiceImpl extends Editor2Service {
  getDocumentBy(uid: string): DocumentDataModel {
    return LOL
  }

}
