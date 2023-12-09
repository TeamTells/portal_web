import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-popup-menu-button',
  templateUrl: './popup-menu-button.component.html',
})
export class PopupMenuButtonComponent {
  @Input() class: string | string[] = [];
  @ViewChild("popupMenuButton",{read:ElementRef}) buttonContent!: ElementRef;
}
