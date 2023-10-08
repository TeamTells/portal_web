
export class Span {

    static create() {
        const span = document.createElement("span")
        span.setAttribute("contenteditable", "true")
        span.id = "ed-text-span"
        span.innerHTML = "<br>"
        return span
    }

}
