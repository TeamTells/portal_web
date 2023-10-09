import {MenuCallbacks} from "../../domain/menu-callbacks";
import {StyleUtils} from "../../domain/html/style-utils";
import {Paragraph} from "../../domain/html/paragraph";
import {ParagraphTypeConsts} from "../../domain/models/models";
import {Image} from "../../domain/html/image";

export class MenuCallbackImpl implements MenuCallbacks{

    constructor(private getSelectedElement: () => HTMLElement | null) {
    }

    onH1Click(): void {
        this.getSelectedElement()?.childNodes?.forEach((element) => {
            (element as HTMLElement)?.setAttribute("class", StyleUtils.h1())
        })
    }


    onTextClick(): void {
        this.getSelectedElement()?.children?.item(0)?.setAttribute("class", "")
        this.getSelectedElement()?.childNodes?.forEach((element) => {
            (element as HTMLElement)?.setAttribute("class", "")
        })
    }

    onAddImage() {
        const selectedElement = this.getSelectedElement()
        if (selectedElement == null) return

        const div = Paragraph.create(ParagraphTypeConsts.image)
        div.append(Image.create("https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"))
        selectedElement.parentElement?.insertBefore(div, selectedElement)
        const index = Array.prototype.indexOf.call(selectedElement.parentNode?.childNodes, selectedElement)
        selectedElement.parentElement?.insertBefore(div, selectedElement.parentElement.children[index - 2])
    }

}
