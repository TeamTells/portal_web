import {TextStyle} from "./models/models";
import {BOLD, CURSIVE, FontSize, SEPARATOR, SIZE_24, SIZE_30} from "./style-const";

export class StyleParser {

    static addTextStyle(style: TextStyle|undefined): string {
        let styleClass = ""

        if (style == undefined) return styleClass

        if (style.hasOwnProperty('bold') && style.bold) {
            styleClass += BOLD
        }

        if (style.hasOwnProperty('cursive') && style.cursive) {
            styleClass += SEPARATOR + CURSIVE
        }

        if (style.hasOwnProperty('size')) {
            styleClass += SEPARATOR

            if (style.size === FontSize.SIZE_24) {
                styleClass += SIZE_24
            } else if (style.size === FontSize.SIZE_30) {
                styleClass += SIZE_30
            }
        }

        return styleClass
    }

}
