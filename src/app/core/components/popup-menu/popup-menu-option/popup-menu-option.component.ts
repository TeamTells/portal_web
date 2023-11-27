import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-menu-option',
  templateUrl: './popup-menu-option.component.html',
})
export class PopupMenuOptionComponent {
  @Input() class: string | string[] = [];
  @Input() divider: boolean = false;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  onClickOption() {
    if (this.onClick) {
      this.onClick.emit();
    }
  }
}
