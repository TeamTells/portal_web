import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-input-field',
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent {
  @Input() placeholder?: string;
  @Input() class: string | string[] = [];
  @Input() defaultValue: string = '';
  @Input() type?: string;
  @Input() autocomplete?: string;
  @Input() error?: string;
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  onChangeValue(event: any) {
    if (!this.onChange) return;
    const value = event.target.value;
    this.onChange.emit(value);
  }
}
