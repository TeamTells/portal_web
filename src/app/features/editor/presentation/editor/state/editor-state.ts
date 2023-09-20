import {Injectable} from "@angular/core";
import {LongreadDocument, ParagraphTypeConsts, TextParagraph} from "../../../domain/models/models";

@Injectable({
  providedIn: 'root'
})
export class EditorState {
  readonly longreadDocument: LongreadDocument = new LongreadDocument("", [])
  readonly content: string = ""
  readonly isDropdownMenuVisible: boolean = false
  readonly isDropdownMenuVisibleSet: Set<string> = new Set<string>()

  isTitlePlaceholderVisible(): boolean {
    const title = this.longreadDocument.title
    return title == "" || title == "<br>"
  }

  isTextPlaceholderVisible(): Boolean {
    const paragraphs = this.longreadDocument.paragraphs

    if (paragraphs.length == 1) {
      const firstParagraph = paragraphs[0]
      return firstParagraph.type == ParagraphTypeConsts.text &&
        (firstParagraph as TextParagraph).spans.length == 1 &&
        (firstParagraph as TextParagraph).spans[0].text == "<br>"
    }

    return false
  }
}
