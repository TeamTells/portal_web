import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-search-field',
  templateUrl: './search-field.component.html',
})
export class SearchFieldComponent {
  @Input() class?: string | string[];
  @Input() placeholder: string = 'Поиск';
  @Input() onSubmit: EventEmitter<string> = new EventEmitter<string>();
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  onSubmitValue(event: any) {
    if (!this.onSubmit) return;
    const value = event.target.value;
    this.onSubmit.emit(value);
  }

  onChangeValue(event: any) {
    if (!this.onChange) return;
    const value = event.target.value;
    this.onChange.emit(value);
  }
}
