import {AfterViewInit, Component} from '@angular/core';
import {comment} from "postcss";
import {Store} from "../../../../core/mvi/store";
import {EditorState} from "./state/editor-state";
import {EditorResultAction} from "./state/editor-result-action";
import {EditorAction, EditorActionType, TextSpanStyle} from "./state/editor-action";
import {EditorExecutor} from "./state/editor-executor";
import {EditorReducer} from "./state/editor-reducer";
import {HtmlDocumentParser} from "../../domain/html-document-parser";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent extends Store<EditorState, EditorExecutor, EditorAction, EditorResultAction> {

  cursorPosition = 0

  constructor(
    state: EditorState,
    executor: EditorExecutor,
    reducer: EditorReducer,
  ) {
    super(state, executor, reducer);
    this.subscribeToUpdateHtml()
  }

  private subscribeToUpdateHtml() {
    const div = document.querySelector('div');
    const self = this
    const divMO = new window.MutationObserver(function (e) {
      const parent = document.getElementById("parent")
      const position = self.getCursorPosition(parent)

      if (position != 0) {
        self.cursorPosition = position
      }

      if (parent != null) {
        self.performAction({
          type: EditorActionType.UPDATE_DOCUMENT,
          element: parent
        })
      }

      const button = document.getElementById("menu-button-0")

      self.subscribeToPlaceholderClick()
      button?.addEventListener('click', (event) => {
        const dropDown = document.getElementById("menu-drop-down-0")
        console.log("wtf?")
        if (dropDown != null) {
          //console.log(document.activeElement)
          dropDown.hidden = !dropDown.hidden
          self.setCursorPosition(self.cursorPosition, parent)
        }
      })

      // Переписать хак с установкой курсора
      // например можно чекать не позицию а что обновляется
      // и если весь документ восстанавливать позицию
      if (position == 0) {
        //console.log(self.cursorPosition)
        self.setCursorPosition(self.cursorPosition, parent)
      }
    });

    if (div != null) {
      divMO.observe(div, {childList: true, subtree: true, characterData: true});
    }
  }

  getCursorPosition(parent: any) {
    const selection = document.getSelection()
    if (selection == null) return 0
    const range = new Range()
    range.setStart(parent, 0)

    const anchorNode = selection.anchorNode
    if (anchorNode == null) return 0
    // console.log('selection.anchorNode')
    // console.log(selection.anchorNode)
    range.setEnd(anchorNode, selection.anchorOffset)
    return range.toString().length
  }

  setCursorPosition(position: number, target: HTMLElement | null) {
    const parent = target
    if (parent == null) return
    let child = parent.firstChild

    while (position > 0) {
      let length = child?.textContent?.length

      if (length == undefined) return;

      if (position > length) {
        position -= length
        child = child!.nextSibling
      } else {
        if (child!.nodeType == 3) {
          child?.parentElement?.focus()
          document?.getSelection()?.collapse(child, position)
          return
        }

        child = child!.firstChild
      }
    }
  }

  private subscribeToPlaceholderClick() {
    // const parent = document.getElementById("parent")
    //
    // if (parent != null) {
    //   parent.addEventListener('click', (event) => {
    //     console.log(this.getCursorPosition(document.getElementById("ed_title")))
    //   })
    // }
    //
    // const titlePlaceholder = document.getElementById("ed_title_placeholder")
    //
    // if (titlePlaceholder != null) {
    //   titlePlaceholder.hidden = !this.state.isTitlePlaceholderVisible()
    //   titlePlaceholder.addEventListener('click', (event) => {
    //     this.setCursorPosition(1, document.getElementById("ed_title"))
    //     //console.log(this.getCursorPosition(parent))
    //   })
    // }
    //
    // const textPlaceholder = document.getElementById("ed_text_placeholder")
    //
    // if (textPlaceholder != null) {
    //   textPlaceholder.hidden = !this.state.isTextPlaceholderVisible()
    //
    //   textPlaceholder.addEventListener('click', (event) => {
    //     this.setCursorPosition(23, parent)
    //     //console.log(this.getCursorPosition(parent))
    //   })
    // }
  }

  protected readonly EditorActionType = EditorActionType;
  protected readonly TextSpanStyle = TextSpanStyle;
}
