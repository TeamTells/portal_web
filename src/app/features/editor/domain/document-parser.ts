import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class DocumentParser {

  space = "&nbsp"

  parse(json: Array<Object>) {
    json.forEach((element) => {

    })

    var element = document.createElement("div")
    element.setAttribute("style", "overflow: hidden;")
    var child1 = document.createElement("div")
    child1.id = "0"
    var child2 = document.createElement("div")
    child2.id = "1"
    element.appendChild(child1)
    element.appendChild(child2)
    child1.innerHTML = "Начало и"
    child1.setAttribute("style", "float: left;")
    child2.innerHTML = " конец"
    child2.setAttribute("style", "float: left;")
    console.log(element)
    return element.innerHTML
  }

}
