import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-core-search-field',
  templateUrl: './search-field.component.html'
})
export class SearchFieldComponent {
  @Input() class?: string | string[];
  @Input() placeholder: string = 'Поиск';
  @Input() onSubmit?: (value: string) => void;
  @Input() onChange?: (value: string) => void;

  onSubmitValue(event: any) {
    if (!this.onSubmit) return
    const value = event.target.value;
    if (value) {
      this.onSubmit(value)
    }
  }

  onChangeValue(event: any) {
    if (!this.onChange) return
    const value = event.target.value;
    if (value) {
      this.onChange(value)
    }
  }
}
