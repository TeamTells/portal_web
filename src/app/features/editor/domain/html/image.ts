export class Image {

    static create(url: string) {
        const imageDivElement = document.createElement("div")
        imageDivElement.setAttribute("class", "flex flex-col")
        imageDivElement.setAttribute("contenteditable", "false")

        const imageElement = document.createElement("img")
        imageElement.setAttribute("class", "place-self-center")
        imageElement.setAttribute("src", url)
        imageElement.setAttribute("title", "")
        imageDivElement.appendChild(imageElement)

        const textDivElement = document.createElement("div")
        textDivElement.setAttribute("class", "place-self-center")
        textDivElement.setAttribute("contenteditable", "true")
        imageDivElement.append(textDivElement)
        textDivElement.innerHTML = "<br>"

        return imageDivElement
    }

}
