import {Component} from '@angular/core';
import {comment} from "postcss";
import {DocumentParser} from "../../domain/document-parser";
import {TextParagraph} from "../../domain/models/models";
import {clone} from "cloneable-ts";
import {compare} from 'fast-json-patch';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  test = "<h3>temp</h3>"
  cursorPosition = 0

  doc: Array<TextParagraph> = [
    {
      id: "1",
      spans: [
        {
          id: "1",
          text: "Сборка и запуск Angular приложения в Docker контейнере",
          style: {
            bold: true,
            size: 32,
          }
        }
      ]
    },
    {
      id: "2",
      spans: [
        {
          id: "1",
          text: "В этой статье мы рассмотрим как собирать и запускать Angular приложение в Docker контейнере. Для этого будем использовать файл Dockerfile, где будут содержаться все необходимые инструкции. Наше приложение будет билдится и хостить свой production-ready код,",
        },
        {
          id: "2",
          text: " в контейнере",
          style: {
            bold: true,
            cursive: true,
          }
        },
        {
          id: "1",
          text: " с веб сервером NGINX.",
        }
      ]
    },
    {
      id: "3",
      spans: [
        {
          id: "1",
          text: "Условимся что у нас уже существует некое приложение sample-app, поэтому шаг с созданием приложения опустим.",
        }
      ]
    },
    {
      id: "4",
      spans: [
        {
          id: "1",
          text: "Создание Dockerfile и nginx.conf",
          style: {
            bold: true,
            size: 32,
          }
        }
      ]
    },
    {
      id: "5",
      spans: [
        {
          id: "1",
          text: "Начинаем с того что создаем в корне нашего Angular приложения, файлы с именем Dockerfile и nginx.conf",
        }
      ]
    }
  ]

  startDoc: Array<TextParagraph> = []


  constructor(private parser: DocumentParser) {
    this.startDoc = clone(this.doc)
    const div = document.querySelector('div');
    const self = this

    const divMO = new window.MutationObserver(function (e) {
      const parent = document.getElementById("parent")
      const position = self.getCursorPosition(parent)

      self.modifyDoc(e[0].target)

      setTimeout(() => {
        self.setCursorPosition(position)
      }, 1000)
    });
    divMO.observe(div!, {childList: true, subtree: true, characterData: true});

    this.test = parser.parse(this.doc)
  }

  modifyDoc(target: Node) {
    const paragraphId = target.parentElement?.getAttribute("paragraphId")
    if (paragraphId == null) return

    const paragraph = this.doc.find((paragraph) => paragraph.id == paragraphId)

    if (paragraph == undefined) return

    const spanId = target.parentElement?.getAttribute("spanId")
    if (spanId == null) return

    const textSpan = paragraph.spans.find((span) => span.id == spanId)

    if (textSpan == undefined) return;

    textSpan.text = <string>target.nodeValue?.toString()

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

  setCursorPosition(position: number) {
    if (position == 0) return

    const parent = document.getElementById("parent")
    if (parent == null) return
    let child = parent.firstChild

    while (position > 0) {
      let length = child!.textContent!.length

      if (position > length) {
        position -= length
        child = child!.nextSibling
      } else {
        if (child!.nodeType == 3) {
          child?.parentElement?.focus()
          document?.getSelection()?.collapse(child, position)
          return
        }

        child = child!.firstChild
      }
    }
  }

  addParagraph() {
    // this.doc.push(new Text("text", "a"))
    // this.doc.push(new Paragraph())
    this.test = this.parser.parse(this.doc)
  }

  findPatches() {
    console.log(compare(this.startDoc, this.doc))
    this.startDoc = clone(this.doc)
  }

  protected readonly comment = comment;
}
