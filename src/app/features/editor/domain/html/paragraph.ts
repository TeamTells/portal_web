export class Paragraph {

    static create(paragraphType: string) {
        const div = document.createElement("div")
        div.setAttribute("contenteditable", "true")
        div.setAttribute("style", "outline:none")
        div.setAttribute("class", "mt-4 ps-12 pe-12")
        div.setAttribute("paragraph-type", paragraphType)
        return div
    }

}
