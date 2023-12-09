import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ContextMenuOptions, EditorCommand} from "../../../../domain/view-state-types";

function getModifierKey(): string {
  let modifierKeyPrefix = "Ctrl"; // control key
  if (
    navigator.platform.indexOf("Mac") === 0 ||
    navigator.platform === "iPhone"
  ) {
    modifierKeyPrefix = "⌘"; // command key
  }
  return modifierKeyPrefix
}

@Component({
  selector: 'app-selection-context-menu',
  templateUrl: './selection-context-menu.component.html',
  styleUrls: ['./selection-context-menu.component.scss'],
  animations: [
    trigger('dialogAnimation', [
      state('hidden', style({
        opacity: 0,
        display: 'none'
      })),
      state('visible', style({
        opacity: 1,
        display: 'block'
      })),
      transition('hidden => visible', animate('0.3s ease-in')),
      transition('visible => hidden', animate('0.3s ease-out'))
    ])
  ]
})
export class SelectionContextMenuComponent implements AfterViewInit, OnChanges {
  @Input() top: number = 0;
  @Input() left: number = 0;
  @Input() isVisible: boolean = false;
  @Input() state: ContextMenuOptions = {
    textStyle: "paragraph",
    textSize: 10,
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    textColor: "#000000",
    paragraphAlignment: 'left'
  };
  @Output() onCommand = new EventEmitter<EditorCommand>();

  tooltips = {
    bold: `Bold (${getModifierKey()} + B)`,
    italic: `Italic (${getModifierKey()} + I)`,
    underline: `Underline (${getModifierKey()} + U)`,
    align_left: `Left Align (${getModifierKey()} + Shift + L)`,
    align_center: `Center Align (${getModifierKey()} + Shift + C)`,
    align_right: `Right Align (${getModifierKey()} + Shift + R)`,
  };

  cardStyle = {
    top: "0px",
    right: "0px"
  };

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.updateCardStyle();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['top'] || changes['left'] || changes['isVisible']) {
      this.updateCardStyle();
    }
  }

  updateCardStyle() {
    const cardHeight = this.el.nativeElement.height;
    console.log(this, cardHeight)
    this.cardStyle = {
      top: `${this.top - cardHeight}px`,
      right: `${this.left}px`
    }
  }

  get dialogState() {
    return this.isVisible ? 'visible' : 'hidden';
  }
}
