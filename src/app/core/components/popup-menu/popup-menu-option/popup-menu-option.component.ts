import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-menu-option',
  templateUrl: './popup-menu-option.component.html'
})
export class PopupMenuOptionComponent {
  @Input() class: string | string[] = [];
}
