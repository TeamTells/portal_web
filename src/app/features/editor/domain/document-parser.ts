import {Injectable} from "@angular/core";
import {ImageParagraph, TextParagraph, TextSpan} from "./models/models";

@Injectable({
  providedIn: 'root',
})
export class DocumentParser {

  space = "&nbsp"

  parse(paragraphs: Array<TextParagraph | ImageParagraph>) {
    const doc = document.createElement("div")
    let element = document.createElement("div");

    paragraphs.forEach((paragraph, index) => {
      if (paragraph.type == "text") {
        const textParagraph = paragraph as TextParagraph

        textParagraph.spans.forEach((textSpan, index) => {
          this.addTextSpanElement(element, textSpan, textParagraph)
        })
      } else if (paragraph.type == "image") {
        this.addImage(paragraph, doc)
      }

      doc.appendChild(element)
      this.addParagraphSeparator(doc)
      element = document.createElement("div")
    })

    return doc.innerHTML
  }

  private addTextSpanElement(element: HTMLElement, textSpan: TextSpan, paragraph: TextParagraph) {
    const textDivElement = document.createElement("span")
    textDivElement.innerHTML = textSpan.text
    textDivElement.setAttribute("paragraphId", paragraph.id)
    textDivElement.setAttribute("spanId", textSpan.id)

    if (textSpan.hasOwnProperty('style')) {
      this.addTextStyle(textDivElement, textSpan.style)
    }

    element.appendChild(textDivElement)
  }

  private addParagraphSeparator(doc: HTMLElement) {
    const textDivParagraphElement = document.createElement("div")
    textDivParagraphElement.setAttribute("contenteditable", "false")
    textDivParagraphElement.appendChild(document.createElement("br"))
    doc.appendChild(textDivParagraphElement)
  }

  private addTextStyle(element: HTMLElement, style: any) {
    let styleClass = ""

    if (style.hasOwnProperty('bold') && style.bold) {
      styleClass += "font-bold"
    }

    if (style.hasOwnProperty('size')) {
      styleClass += " text-2xl"
    }

    element.setAttribute("class", styleClass)
  }

  private addImage(paragraph: TextParagraph | ImageParagraph, doc: HTMLElement) {
    const imageParagraph = paragraph as ImageParagraph

    const imageDivElement = document.createElement("div")

    const imageElement = document.createElement("img")
    imageElement.setAttribute("paragraphId", imageParagraph.id)
    imageElement.setAttribute("src", imageParagraph.url)
    imageDivElement.appendChild(imageElement)

    const textDivElement = document.createElement("div")
    textDivElement.innerHTML = imageParagraph.description
    textDivElement.setAttribute("paragraphId", imageParagraph.id)
    imageDivElement.appendChild(textDivElement)
    doc.appendChild(imageDivElement)
  }

}
