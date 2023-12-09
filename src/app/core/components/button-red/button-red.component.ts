import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-button-red',
  templateUrl: './button-red.component.html',
})
export class ButtonRedComponent {
  @Input() class: string | string[] = [];
  @Output() public onClick = new EventEmitter();

  onClickEvent(): void {
    this.onClick.emit();
  }
}
