import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-button-red',
  templateUrl: './button-red.component.html',
  styleUrls: ['./button-red.component.scss']
})
export class ButtonRedComponent {
  @Input() public text: string = "Button";

  @Output() public buttonClick = new EventEmitter();

  onClick(): void
  {
    this.buttonClick.emit();
  }
}
