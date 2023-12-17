import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-phone-number-field',
  templateUrl: './phone-number-field.component.html',
})
export class PhoneNumberFieldComponent {
  @Input() class: string | string[] = [];
  @Input() placeholder: string = 'Мобильный телефон*';
  @Input() error?: string;
  @Input() defaultValue: string = '';
  @Input() onSubmit: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  onChangeValue(event: any) {
    if (!this.onChange) return;
    const value = event.target.value;
    this.onChange.emit(value);
  }
}
