import {Component, OnInit} from '@angular/core';
import {Store} from "../../../../core/mvi/store";
import {EditorState} from "./state/editor-state";
import {EditorResultAction} from "./state/editor-result-action";
import {EditorAction, EditorActionType, TextSpanStyle} from "./state/editor-action";
import {EditorExecutor} from "./state/editor-executor";
import {EditorReducer} from "./state/editor-reducer";
import {DropDown} from "../../domain/menu";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent extends Store<EditorState, EditorExecutor, EditorAction, EditorResultAction> implements OnInit {

  private menu: HTMLElement | null = DropDown.create()
  private dropDown: HTMLElement | null = null
  private hideMenuListener = (event: MouseEvent) => {
    console.log(event.target)
    if (this.dropDown?.style.visibility == "visible") {
      console.log("hide")
      this.dropDown.style.visibility = "hidden"
    }
  }
  private clickListener = () => {
    console.log(document.getSelection()?.anchorNode?.parentElement?.parentElement!)
    const element = document.getSelection()?.anchorNode?.parentElement
    if (this.menu != null) {
      element?.parentElement?.insertBefore(this.menu, element)
    }
  }

  constructor(
    state: EditorState,
    executor: EditorExecutor,
    reducer: EditorReducer,
  ) {
    super(state, executor, reducer);
    this.subscribeToUpdateHtml()
  }

  ngOnInit(): void {

  }

  private subscribeToUpdateHtml() {
    const div = document.querySelector('div');
    const self = this
    const divMO = new window.MutationObserver(function (e) {
      self.dropDown = DropDown.create()
      self.dropDown = document.getElementById("ed-drop-down")
      console.log(e)
      const parent = document.getElementById("parent")

      const button = document.getElementById("ed-menu-button")

      self.subscribeToPlaceholderClick()
      button?.addEventListener('click', (e) => {
        document.removeEventListener("click", self.hideMenuListener)

        if (self.dropDown?.style.visibility == "hidden") {
          console.log("visible")
          self.dropDown.style.visibility = "visible"
        }
        e.stopPropagation()
        //document.addEventListener("click", self.hideMenuListener)

      })

      if (self.dropDown?.style.visibility == "visible") {
        window.onclick = () => {
          console.log("hide")
          if (self.dropDown?.style.visibility == "visible") {
            self.dropDown!.style.visibility = "hidden"
          }
        }
      }


    });

    if (div != null) {
      divMO.observe(div, {childList: true, subtree: true, characterData: true});
    }
  }

  private subscribeToPlaceholderClick() {
    const parent = document.getElementById("parent")

    if (parent != null) {
      parent.removeEventListener('click', this.clickListener)
      parent.addEventListener('click', this.clickListener)
    }
  }

  protected readonly EditorActionType = EditorActionType;
  protected readonly TextSpanStyle = TextSpanStyle;
}
