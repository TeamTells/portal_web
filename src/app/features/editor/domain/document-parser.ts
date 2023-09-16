import {Injectable} from "@angular/core";
import {ImageParagraph, LongreadDocument, TextParagraph, TextSpan, TextStyle} from "./models/models";
import {BOLD, CURSIVE, SEPARATOR, SIZE_24} from "./style-const";

@Injectable({
  providedIn: 'root',
})
export class DocumentParser {

  space = "&nbsp"

  parse(longreadDocument: LongreadDocument) {
    const doc = document.createElement("div")
    let element = document.createElement("div");

    this.addTitle(doc, longreadDocument.title)

    longreadDocument.paragraphs.forEach((paragraph, index) => {
      if (paragraph.type == "text") {
        const textParagraph = paragraph as TextParagraph

        textParagraph.spans.forEach((textSpan, index) => {
          this.addTextSpanElement(element, textSpan, textParagraph)
        })
      } else if (paragraph.type == "image") {
        this.addImage(paragraph, doc)
      }

      element.setAttribute("type", paragraph.type.toString())
      doc.appendChild(element)
      element = document.createElement("div")
      element.setAttribute("class", "mt-4")
    })

    return doc.innerHTML
  }

  private addTitle(doc: HTMLElement, title: string) {
    const titleElement = document.createElement("div")

    titleElement.innerHTML = title
    titleElement.setAttribute("class", "font-bold text-4xl mt-4 mb-4")
    titleElement.setAttribute("type", "title")
    if (title == "") {
      titleElement.innerHTML = "<br>"
      const placeHolderElement = document.createElement("div")
      placeHolderElement.setAttribute("class", "font-bold text-4xl mt-4 mb-4 text-gray-400")
      placeHolderElement.setAttribute("contenteditable", "false")
      placeHolderElement.innerHTML = "Заголовок"
      doc.appendChild(placeHolderElement)
    }
    doc.appendChild(titleElement)
  }

  private addTextSpanElement(element: HTMLElement, textSpan: TextSpan, paragraph: TextParagraph) {
    const textDivElement = document.createElement("span")
    textDivElement.innerHTML = textSpan.text

    if (textSpan.style != undefined) {
      this.addTextStyle(textDivElement, textSpan.style)
    }

    element.appendChild(textDivElement)
  }

  private addTextStyle(element: HTMLElement, style: TextStyle) {
    let styleClass = ""

    if (style.hasOwnProperty('bold') && style.bold) {
      styleClass += BOLD
    }

    if (style.hasOwnProperty('cursive') && style.cursive) {
      styleClass += SEPARATOR + CURSIVE
    }

    if (style.hasOwnProperty('size')) {
      if (style.size == 24) {
        styleClass += SEPARATOR + SIZE_24
      }
    }

    console.log("style " + styleClass)
    element.setAttribute("class", styleClass)
  }

  private addImage(paragraph: TextParagraph | ImageParagraph, doc: HTMLElement) {
    const imageParagraph = paragraph as ImageParagraph

    const imageDivElement = document.createElement("div")
    imageDivElement.setAttribute("class", "flex flex-col")

    const imageElement = document.createElement("img")
    imageElement.setAttribute("class", "place-self-center")
    imageElement.setAttribute("src", imageParagraph.url)
    imageElement.setAttribute("title", "")
    imageDivElement.appendChild(imageElement)

    const textDivElement = document.createElement("div")
    textDivElement.innerHTML = imageParagraph.description
    textDivElement.setAttribute("class", "place-self-center")
    imageDivElement.appendChild(textDivElement)
    doc.appendChild(imageDivElement)
  }

}
