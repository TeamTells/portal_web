import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class DocumentParser {

  space = "&nbsp"

  parse(json: Array<any>) {
    const doc = document.createElement("div")
    let paragraph = document.createElement("div");

    json.forEach((jsonElement, index) => {
      switch (jsonElement.type) {

        case "text":
          const textDivElement = document.createElement("span")
          textDivElement.innerHTML = jsonElement.text
          textDivElement.id = index.toString()

          if (jsonElement.hasOwnProperty('style')) {
            this.addTextStyle(textDivElement, jsonElement.style)
          }

          paragraph.appendChild(textDivElement)
          break;

        case "paragraph":
          doc.appendChild(paragraph)
          const textDivParagraphElement = document.createElement("div")
          textDivParagraphElement.appendChild(document.createElement("br"))
          doc.appendChild(textDivParagraphElement)
          paragraph = document.createElement("div")
          break

      }
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
