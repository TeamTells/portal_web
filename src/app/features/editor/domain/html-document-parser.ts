import {Injectable} from "@angular/core";
import {LongreadDocument, Paragraph, TextParagraph, TextSpan, TextStyle} from "./models/models";
import {BOLD, CURSIVE, SEPARATOR, SIZE_24} from "./style-const";

@Injectable({
  providedIn: 'root',
})
export class HtmlDocumentParser {

  space = "&nbsp"

  parse(html: HTMLElement) {
    const parent = html.children[0]
    console.log(parent as HTMLElement)
    const children = parent.children

    let title = ""
    let paragraphs: Array<Paragraph> = []
    for (let i = 0; i < children.length; i++) {
      const element = children[i]
      const type = children[i].getAttribute("type")

      if (type == "title") {
        title = element.innerHTML
      } else if (type == "text") {
        this.addTextParagraph(paragraphs, element)
      } else if (type == "image") {

      }
    }

    const newDocument = new LongreadDocument(
      title, paragraphs
    )

    console.log(newDocument)
    return newDocument
  }

  private addTextParagraph(paragraphs: Array<Paragraph>, element: Element) {
    const children = element.children

    const spans: Array<TextSpan> = []
    for (let i = 0; i < children.length; i++) {
      const child = children[i]


      const span = new TextSpan(
        child.innerHTML,
        this.createStyle(child)
      )
      spans.push(span)
    }

    paragraphs.push(new TextParagraph("text", spans))
  }

  private createStyle(child: Element) {
    const classAttr = child.getAttribute("class")

    if (classAttr != null) {
      const attrs = classAttr.split(SEPARATOR)

      if (attrs.length == 0) {
        return undefined
      }

      const style = new TextStyle()
      attrs.forEach((value) => {
        if (value == BOLD) {
          style.bold = true
        } else if (value == CURSIVE) {
          style.cursive = true
        } else if (value == SIZE_24) {
          style.size = 24
        }
      })
      return style
    } else {
      return undefined
    }
  }

}
