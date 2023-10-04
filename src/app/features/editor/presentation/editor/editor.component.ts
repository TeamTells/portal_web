import {AfterViewInit, Component} from '@angular/core';
import {Store} from "../../../../core/mvi/store";
import {EditorState} from "./state/editor-state";
import {EditorResultAction} from "./state/editor-result-action";
import {EditorAction} from "./state/editor-action";
import {EditorExecutor} from "./state/editor-executor";
import {EditorReducer} from "./state/editor-reducer";
import {DropDown} from "../../domain/menu";
import {ParagraphTypeConsts, TextParagraph} from "../../domain/models/models";

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent extends Store<EditorState, EditorExecutor, EditorAction, EditorResultAction> implements AfterViewInit {

    private menu: HTMLElement | null = DropDown.create()
    private dropDown: HTMLElement | null = null

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
                    const isTextParagraph = anchorNode?.parentElement?.parentElement?.getAttribute("paragraph-type") == "text" ||
                        anchorNode?.parentElement?.getAttribute("paragraph-type") == "text"
                    if (isTextParagraph) {
                        const paragraph = anchorNode?.parentElement?.parentElement?.cloneNode()
                        const span = document.createElement("span")
                        span.setAttribute("contenteditable", "true")
                        span.id = "ed-text-span"
                        span.innerHTML = "<br>"
                        span.setAttribute("style", "outline:none")
                        paragraph?.appendChild(span)

                        if (paragraph != null) {
                            anchorNode?.parentElement?.parentElement?.parentElement
                                ?.insertBefore(paragraph, anchorNode?.parentElement?.parentElement.nextSibling)
                        }

                        const range = document.createRange()
                        range.selectNodeContents(span)
                        range.collapse(false)
                        selection?.removeAllRanges()
                        selection?.addRange(range)
                    }
                    event.preventDefault()
                    return;
                }
            }
        })
    }

    private setMenuButton() {
        const element = document.getSelection()?.anchorNode?.parentElement
        const paragraphType = element?.getAttribute("paragraph-type")

        if (this.menu != null && paragraphType == ParagraphTypeConsts.text && element?.children.length == 1 && element?.children[0].textContent == "") {
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
}
