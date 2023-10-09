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
        textDivElement.setAttribute("class", "place-self-center mt-2")
        textDivElement.setAttribute("contenteditable", "true")
        textDivElement.setAttribute("style", "outline:none")
        textDivElement.setAttribute("data-placeholder", "Введите описание (не обязательно)")
        imageDivElement.append(textDivElement)

        return imageDivElement
    }

}
