import {AfterViewInit, Component} from '@angular/core';
import {Store} from "../../../../core/mvi/store";
import {EditorState} from "./state/editor-state";
import {EditorResultAction} from "./state/editor-result-action";
import {EditorAction} from "./state/editor-action";
import {EditorExecutor} from "./state/editor-executor";
import {EditorReducer} from "./state/editor-reducer";
import {DropDown} from "../../domain/html/menu";
import {ImageParagraph, ParagraphTypeConsts, TextParagraph} from "../../domain/models/models";
import {StyleUtils} from "../../domain/html/style-utils";
import {Span} from "../../domain/html/span";
import {MenuCallbackImpl} from "./menu-callback-impl";
import {Paragraph} from "../../domain/html/paragraph";
import {Image} from "../../domain/html/image";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent extends Store<EditorState, EditorExecutor, EditorAction, EditorResultAction> implements AfterViewInit {

  private dropDown: HTMLElement | null = null
  private selectedElement: HTMLElement | null = null
  private menu: HTMLElement | null = DropDown.create(new MenuCallbackImpl(() => {
    return this.selectedElement
  }))

  private menuButtonClickListener = (e: MouseEvent) => {
    if (this.dropDown?.style.visibility == "hidden") {
      this.dropDown.style.visibility = "visible"
    } else if (this.dropDown?.style.visibility == "visible") {
      this.dropDown.style.visibility = "hidden"
    }
    e.stopPropagation()
  }

  private documentClickListener = () => {
    if (this.dropDown?.style.visibility == "visible") {
      this.dropDown!.style.visibility = "hidden"
    }
  }

  private keyShowMenuClickListener = (event: KeyboardEvent) => {
    if (event.key == 'Enter') {
      this.setMenuButton()
    }
  }

  private menuClickListener = () => {
    this.setMenuButton()
  }

  constructor(
    state: EditorState,
    executor: EditorExecutor,
    reducer: EditorReducer,
  ) {
    super(state, executor, reducer);
    this.subscribeToUpdateHtml()
  }

  ngAfterViewInit(): void {
    document?.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key == 'Backspace' || event.key == 'Delete') {
        const selection = document.getSelection()
        const anchorNode = selection?.anchorNode

        if (anchorNode?.parentElement?.parentElement?.getAttribute("paragraph-type") == "text") {
          const parent = anchorNode?.parentElement?.parentElement
          if (parent?.children?.length == 1 && parent?.children[0].children.length == 0) {
            parent?.append(Span.create())
            return;
          }
        } else if (anchorNode?.parentElement?.getAttribute("paragraph-type") == "text") {
          const parent = anchorNode?.parentElement
          if (parent?.children?.length == 1 && parent.children[0].innerHTML == '<br>') {
            parent?.parentElement?.removeChild(parent)
            return;
          }
        }
      }

      if (event.key == 'Enter') {
        const selection = document.getSelection()
        const anchorNode = selection?.anchorNode
        const isTitle = anchorNode?.parentElement?.id == "ed-title" ||
          (document.getSelection()?.anchorNode as HTMLElement).id == "ed-title"

        if (isTitle) {
          event.preventDefault()
          return
        }

        const isTextSpan = anchorNode?.parentElement?.id == "ed-text-span" ||
          (anchorNode?.parentElement?.firstChild as HTMLElement).id == "ed-text-span"

        if (isTextSpan) {
          if (anchorNode?.parentElement?.parentElement?.getAttribute("paragraph-type") == "text") {
            const paragraph = anchorNode?.parentElement?.parentElement
            this.addTextParagraph(paragraph, selection)
          } else if (anchorNode?.parentElement?.getAttribute("paragraph-type") == "text") {
            const paragraph = anchorNode?.parentElement
            this.addTextParagraph(paragraph, selection)
          }

          event.preventDefault()
          return;
        }
      }
    })
  }

  onImageFileSelect(event: any) {
      console.log(event.target.files[0])
      const imageFile = event.target.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', (event) => {
        console.log(event.target?.result)

          const selectedElement = this.selectedElement
          if (selectedElement == null) return

          const div = Paragraph.create(ParagraphTypeConsts.image)
          div.append(Image.create(event.target?.result?.toString()!))
          selectedElement.parentElement?.insertBefore(div, selectedElement)
          const index = Array.prototype.indexOf.call(selectedElement.parentNode?.childNodes, selectedElement)
          selectedElement.parentElement?.insertBefore(div, selectedElement.parentElement.children[index - 2])
      })
      reader.readAsDataURL(imageFile)
  }

  private addTextParagraph(element: HTMLElement | null, selection: Selection | null) {
    const paragraph = Paragraph.create(ParagraphTypeConsts.text)
    const span = Span.create()
    span.setAttribute("style", "outline:none")
    paragraph?.appendChild(span)

    if (paragraph != null) {
      element?.parentElement?.insertBefore(paragraph, element.nextSibling)
    }

    const range = document.createRange()
    range.selectNodeContents(span)
    range.collapse(false)
    selection?.removeAllRanges()
    selection?.addRange(range)
  }

  private setMenuButton() {
    const element = document.getSelection()?.anchorNode?.parentElement
    const paragraphType = element?.getAttribute("paragraph-type")
    if (this.menu != null && paragraphType == ParagraphTypeConsts.text && element?.children.length == 1 && element?.children[0].textContent == "") {
      this.selectedElement = element

      element?.parentElement?.insertBefore(this.menu, element)
    }
  }

  private subscribeToUpdateHtml() {
    const div = document.querySelector('div');
    const self = this
    const divMO = new window.MutationObserver(function (e: MutationRecord[]) {
      self.initDropdownMenu()
      self.initTitle()
    });

    if (div != null) {
      divMO.observe(div, {childList: true, subtree: true, characterData: true});
    }
  }

  private initTitle() {
    const title = document.getElementById("ed-title")
    if (title != null && title.innerHTML == "<br>") {
      title.innerHTML = ""
    }
  }

  private initDropdownMenu() {
    this.dropDown = document.getElementById("ed-drop-down")

    const parent = document.getElementById("parent")

    parent?.removeEventListener('click', this.menuClickListener)
    parent?.addEventListener('click', this.menuClickListener)

    const button = document.getElementById("ed-menu-button")

    button?.removeEventListener('click', this.menuButtonClickListener)
    button?.addEventListener('click', this.menuButtonClickListener)

    document.removeEventListener('click', this.documentClickListener)
    document.addEventListener('click', this.documentClickListener)

    document?.removeEventListener('keyup', this.keyShowMenuClickListener)
    document?.addEventListener('keyup', this.keyShowMenuClickListener)
  }

  protected readonly TextParagraph = TextParagraph;
  protected readonly StyleParser = StyleUtils;
  protected readonly ImageParagraph = ImageParagraph;
}
