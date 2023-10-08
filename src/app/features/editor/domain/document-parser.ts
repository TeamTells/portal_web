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
import {Image} from "./html/image";

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
            element.id = "ed_paragraph_" + paragraphIndex

            doc.appendChild(element)
            element = document.createElement("div")
        })

        return doc.innerHTML
    }

    private addTextSpanElement(element: HTMLElement, textSpan: TextSpan, isFirstSpan: boolean) {
        const textDivElement = document.createElement("span")

        textDivElement.innerHTML = textSpan.text

        if (textSpan.style != undefined) {
            this.addTextStyle(textDivElement, textSpan.style)
        }

        textDivElement.setAttribute("class", "grow w-3/4 h-full")

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

        const imageDivElement = Image.create(imageParagraph.url)

        imageDivElement.children[0].innerHTML = imageParagraph.description
        doc.appendChild(imageDivElement)
    }

}
