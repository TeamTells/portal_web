import {AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, SimpleChanges} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

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
  cardStyle = {
    top: "0px",
    right: "0px"
  };

  constructor( private el: ElementRef) {}

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
    this.cardStyle.top = `${this.top - cardHeight}px`;
    this.cardStyle.right = `${this.left}px`;
  }

  get dialogState() {
    return this.isVisible ? 'visible' : 'hidden';
  }
}
