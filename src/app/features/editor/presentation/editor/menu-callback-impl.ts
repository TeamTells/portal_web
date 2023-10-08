import {MenuCallbacks} from "../../domain/menu-callbacks";
import {StyleUtils} from "../../domain/html/style-utils";

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
        this.getSelectedElement()
    }

}
