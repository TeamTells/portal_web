import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-popup-menu-content',
  templateUrl: './popup-menu-content.component.html',
})
export class PopupMenuContentComponent {
  @ViewChild('menuContent', { read: ElementRef }) menuContent!: ElementRef;
  hidenStyle: string = 'hidden';
  leftOffset: string = '0px';
  topOffset: string = '0px';
}
