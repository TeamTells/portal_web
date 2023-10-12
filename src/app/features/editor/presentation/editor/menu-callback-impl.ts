import {MenuCallbacks} from "../../domain/menu-callbacks";
import {StyleUtils} from "../../domain/html/style-utils";
import {Paragraph} from "../../domain/html/paragraph";
import {ParagraphTypeConsts} from "../../domain/models/models";
import {Image} from "../../domain/html/image";

export class MenuCallbackImpl implements MenuCallbacks {

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
    document.getElementById("ed-file-input")?.click()
  }

}
