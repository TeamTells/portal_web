import {Component} from '@angular/core';
import {comment} from "postcss";
import {DocumentParser} from "../../domain/document-parser";
import {DocumentNode, Span} from "../../domain/models/models";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  test = "<h3>asfd</h3>"
  cursorPosition = 0

  doc: Array<DocumentNode | Span> = [
    {
      type: "text",
      text: "Сборка и запуск Angular приложения в Docker контейнере",
      style: {
        bold: true,
        size: 32,
      }
    },
    {
      type: "paragraph",
    },
    {
      type: "text",
      text: "В этой статье мы рассмотрим как собирать и запускать Angular приложение в Docker контейнере. Для этого будем использовать файл Dockerfile, где будут содержаться все необходимые инструкции. Наше приложение будет билдится и хостить свой production-ready код,",
    },
    {
      type: "text",
      text: " в контейнере",
      style: {
        bold: true,
        cursive: true,
      }
    },
    {
      type: "text",
      text: " с веб сервером NGINX.",
    },
    {
      type: "paragraph",
    },
    {
      type: "text",
      text: "Условимся что у нас уже существует некое приложение sample-app, поэтому шаг с созданием приложения опустим.",
    },
    {
      type: "paragraph",
    },
    {
      type: "text",
      text: "Создание Dockerfile и nginx.conf",
      style: {
        bold: true,
        size: 32,
      }
    },
    {
      type: "paragraph",
    },
    {
      type: "text",
      text: "Начинаем с того что создаем в корне нашего Angular приложения, файлы с именем Dockerfile и nginx.conf",
    },
    {
      type: "paragraph",
    },
  ];


  constructor(private parser: DocumentParser) {
    const div = document.querySelector('div');
    const self = this

    const divMO = new window.MutationObserver(function (e) {
      const parent = document.getElementById("parent")
      const position = self.getCursorPosition(parent)
      self.cursorPosition = position
      self.modifyDoc(e)

      const selection = document.getSelection()
      selection?.removeAllRanges()
      self.setCursorPosition()
    });
    divMO.observe(div!, {childList: true, subtree: true, characterData: true});

    this.test = parser.parse(this.doc)
  }

  private modifyDoc(e: MutationRecord[]) {
    const target = e[0].target
    const strId = target.parentElement?.getAttribute("id")
    if (strId == null) return
    const id = +strId
    const node = this.doc[id]
    if (node instanceof Span) {
      node.text = <string>target.nodeValue?.toString()
    }
    this.test = this.parser.parse(this.doc)
  }

  getCursorPosition(parent: any) {
    const selection = document.getSelection()
    if (selection == null) return 0
    const range = new Range()
    range.setStart(parent, 0)

    const anchorNode = selection.anchorNode
    if (anchorNode == null) return 0
    range.setEnd(anchorNode, selection.anchorOffset)
    return range.toString().length
  }

  setCursorPosition() {
    const parent = document.getElementById("parent")
    if (parent == null) return
    let child = parent.firstChild
    let position = this.cursorPosition
    while (position > 0) {
      let length = child!.textContent!.length
      if (position > length) {
        position -= length
        child = child!.nextSibling
      } else {
        console.log(child)
        console.log(position)
        if (child!.nodeType == 3) return document.getSelection()?.collapse(child, position)
        child = child!.firstChild
      }
    }
  }

  protected readonly comment = comment;
}
