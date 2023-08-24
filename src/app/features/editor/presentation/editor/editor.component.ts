import {Component} from '@angular/core';
import {comment} from "postcss";
import {compare} from 'fast-json-patch';
import {DocumentParser} from "../../domain/document-parser";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  test = "<h3>asfd</h3>"

  constructor(parser: DocumentParser) {
    const div = document.querySelector('div');
    const divMO = new window.MutationObserver(function(e) {
      console.log(e)
    });
    divMO.observe(div!, { childList: true, subtree: true, characterData: true });

    const doc = [
      {
        type: "text",
        text: "Title",
        style: { //для хранения
          bold: true,
          size: 32,
        }
      },
      {
        type: "paragraph",
      },
      {
        type: "text",
        text: "Длинный текст, ", // максимум 1000 символов, нету поля стиль, считается что просто текст
      },
      {
        type: "text",
        text: "в конце жирный",
        style: {
          bold: true,
          cursive: true,
        }
      },
      {
        type: "paragraph",
      },
      {
        type: "text",
        text: "текст с новой строки",
      },
      {
        type: "paragraph",
      },
      {
        type: "text",
        text: "Маркерованный текст",
        style: {
          paragraphType: "mark" // mark, num - точка или цифра в начале строки
        }
      },
    ];

    this.test = parser.parse(doc)


    const document2 = [
      {
        type: "text",
        text: "Title",
        style: { //для хранения
          bold: true,
          size: 32,
        }
      },
      {
        type: "paragraph",
      },
      {
        type: "text",
        text: "Длинный текст, ", // максимум 1000 символов, нету поля стиль, считается что просто текст
      },
      {
        type: "text",
        text: "в конце жирный",
        style: {
          bold: true,
          cursive: true,
        }
      },
      {
        type: "paragraph",
      },
      {
        type: "text",
        text: "текст с новой строки",
      },
      {
        type: "paragraph",
      },
      {
        type: "text",
        text: "Маркерованный текст фыва",
        style: {
          paragraphType: "mark" // mark, num - точка или цифра в начале строки
        }
      },
    ];

    console.log(compare(document, document2))
  }

  protected readonly comment = comment;
}
