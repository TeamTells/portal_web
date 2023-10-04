import {Injectable} from "@angular/core";
import {
  ImageParagraph,
  LongreadDocument,
  ParagraphTypeConsts,
  TextParagraph,
  TextSpan,
  TextStyle
} from "./models/models";
import {BOLD, CURSIVE, FontSize, SEPARATOR, SIZE_24, SIZE_30} from "./style-const";

@Injectable({
  providedIn: 'root',
})
export class DocumentParser {

  parse(
    longreadDocument: LongreadDocument,
    focusedParagraphId: string,
    isDropdownVisible: boolean
  ) {
    const doc = document.createElement("div")
    let element = document.createElement("div");

    if (longreadDocument.paragraphs.length == 0) {
      longreadDocument.paragraphs.push(new TextParagraph(ParagraphTypeConsts.text, [new TextSpan("")]))
    }

    longreadDocument.paragraphs.forEach((paragraph, paragraphIndex) => {
      if (paragraph.type == ParagraphTypeConsts.text) {
        const textParagraph = paragraph as TextParagraph

        textParagraph.spans.forEach((textSpan, index) => {
          this.addTextSpanElement(element, textSpan, index == 0 && paragraphIndex == 0 && longreadDocument.paragraphs.length == 1 && (longreadDocument.paragraphs[0] as TextParagraph).spans.length == 1)
        })

      } else if (paragraph.type == ParagraphTypeConsts.image) {
        this.addImage(paragraph, doc)
      }

      element.setAttribute("ed-type", paragraph.type.toString())
      element.setAttribute("class", "mt-4 ms-12 me-12 min-w-full")
      const paragraphId = "ed_paragraph_" + paragraphIndex
      element.id = paragraphId

        //this.addMenu(paragraphIndex, doc, isDropdownVisible)

      doc.appendChild(element)
      element = document.createElement("div")
    })

    return doc.innerHTML
  }

  private addTextSpanElement(element: HTMLElement, textSpan: TextSpan, isFirstSpan: boolean) {
    const textDivElement = document.createElement("span")

    let text = textSpan.text

    // if (text.length == 0) {
    //   text = "<br>"
    // }

    textDivElement.innerHTML = text

    if (textSpan.style != undefined) {
      this.addTextStyle(textDivElement, textSpan.style)
    }

    // if (isFirstSpan) {
       textDivElement.setAttribute("class", "grow w-3/4 h-full")
    //   textDivElement.setAttribute("class", "newParagraphPlaceholder")
    // }

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
      styleClass += SEPARATOR

      if (style.size === FontSize.SIZE_24) {
        styleClass += SIZE_24
      } else if (style.size === FontSize.SIZE_30) {
        styleClass += SIZE_30
      }
    }

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
