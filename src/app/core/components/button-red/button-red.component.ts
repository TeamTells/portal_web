import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-button-red',
  templateUrl: './button-red.component.html',
})
export class ButtonRedComponent {
  @Input() class: string | string[] = [];
  @Input() public text: string = 'Button';
  @Output() public buttonClick = new EventEmitter();

  onClick(): void {
    this.buttonClick.emit();
  }
}
