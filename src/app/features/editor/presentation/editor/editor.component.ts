import {Component} from '@angular/core';
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
export class EditorComponent extends Store<EditorState, EditorExecutor, EditorAction, EditorResultAction> {

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
        console.log("hide")
        if (this.dropDown?.style.visibility == "visible") {
            this.dropDown!.style.visibility = "hidden"
        }
    }

    private keyClickListener = (event: KeyboardEvent) => {
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
        });

        if (div != null) {
            divMO.observe(div, {childList: true, subtree: true, characterData: true});
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

        document?.removeEventListener('keyup', this.keyClickListener)
        document?.addEventListener('keyup', this.keyClickListener)
    }

    protected readonly TextParagraph = TextParagraph;
}
