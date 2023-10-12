import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-core-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent {
  @Input() placeholder?: string;
  @Input() class: string[] | string = [];
  @Input() defaultValue: string = '';
  @Input() type?: string;
  @Input() onChange?: (value: string) => void;

  onChangeValue(event: any) {
    if (!this.onChange) return
    const value = event.target.value;
    if (value) {
      this.onChange(value)
    }
  }
}
