import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-button-light-gray',
  templateUrl: './button-light-gray.component.html',
  styleUrls: ['./button-light-gray.component.scss']
})
export class ButtonLightGrayComponent {
  @Input() public text: string = "Button";

  @Output() public buttonClick = new EventEmitter();

  onClick(): void
  {
    this.buttonClick.emit();
  }
}
