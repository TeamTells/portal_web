export class Paragraph {

    static create() {
        const div = document.createElement("div")
        div.setAttribute("contenteditable", "true")
        div.setAttribute("class", "mt-4 ps-12 pe-12")
        return div
    }

}
