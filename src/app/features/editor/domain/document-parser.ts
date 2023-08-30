import {Injectable} from "@angular/core";
import {TextParagraph} from "./models/models";

@Injectable({
  providedIn: 'root',
})
export class DocumentParser {

  space = "&nbsp"

  parse(paragraphs: Array<TextParagraph>) {
    const doc = document.createElement("div")
    let paragraph = document.createElement("div");

    paragraphs.forEach((textParagraph, index) => {
      textParagraph.spans.forEach((textSpan, index) => {
        const textDivElement = document.createElement("span")
        textDivElement.innerHTML = textSpan.text
        textDivElement.setAttribute("paragraphId", textParagraph.id)
        textDivElement.setAttribute("spanId", textSpan.id)

        if (textSpan.hasOwnProperty('style')) {
          this.addTextStyle(textDivElement, textSpan.style)
        }

        paragraph.appendChild(textDivElement)
      })

      doc.appendChild(paragraph)
      const textDivParagraphElement = document.createElement("div")
      textDivParagraphElement.setAttribute("contenteditable", "false")
      textDivParagraphElement.appendChild(document.createElement("br"))
      doc.appendChild(textDivParagraphElement)
      paragraph = document.createElement("div")
    })

    return doc.innerHTML
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

}
