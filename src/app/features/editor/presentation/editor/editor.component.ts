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

  doc = [
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


  constructor(private parser: DocumentParser) {
    const div = document.querySelector('div');
    const self = this

    const divMO = new window.MutationObserver(function(e) {
      console.log(e)
      self.modifyDoc(e)
    });
    divMO.observe(div!, { childList: true, subtree: true, characterData: true });

    this.test = parser.parse(this.doc)
  }

  private modifyDoc(e: MutationRecord[]) {
    const target = e[0].target
    const  strId = target.parentElement?.getAttribute("id")
    if (strId == null) return
    const id = +strId
    this.doc[id].text = target.nodeValue?.toString()
    console.log(this.doc)
    this.test = this.parser.parse(this.doc)
  }

  protected readonly comment = comment;
}
