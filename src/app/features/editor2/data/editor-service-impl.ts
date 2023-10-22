import {Injectable} from "@angular/core";
import {DocumentDataModel} from "../domain/model-types";
import {Editor2Service} from "../domain/editor-service";

@Injectable({
  providedIn: 'root'
})
export class Editor2ServiceImpl extends Editor2Service {
  getDocumentBy(uid: string): DocumentDataModel {
    return [
      {
        type: 'paragraph',
        children: [
          {text: 'This is editable '},
          {text: 'rich', bold: true},
          {text: ' text, '},
          {text: 'much', bold: true, italic: true},
          {text: ' better than a '},
          // {text: '<textarea>', 'code-line': true},
          {text: '!'},
        ],
      },
      // {
      //   type: 'heading-one',
      //   children: [{text: 'This is h1 '}],
      // },
      // {
      //   type: 'heading-three',
      //   children: [{text: 'This is h3 '}],
      // },
      // {
      //   type: 'paragraph',
      //   children: [
      //     {
      //       text: `Since it's rich text, you can do things like turn a selection of text `,
      //     },
      //     {text: 'bold', bold: true},
      //     {
      //       text: ', or add a semantically rendered block quote in the middle of the page, like this:',
      //     },
      //   ],
      // },
      // {
      //   type: 'block-quote',
      //   children: [{text: 'A wise quote.'}],
      // },
      // {
      //   type: 'paragraph',
      //   children: [{text: 'Try it out for yourself!'}],
      // },
      // {
      //   type: 'paragraph',
      //   children: [{text: ''}],
      // },
    ];
  }

}
