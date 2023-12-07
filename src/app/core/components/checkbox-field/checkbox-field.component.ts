import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-core-checkbox-field',
  templateUrl: './checkbox-field.component.html',
})
export class CheckboxFieldComponent {
  @Input() class: string | string[] = [];
  @Input() id: string = Date.now().toString();
  @Input() label: string = '';
  @Input() value: boolean = false;
  @Output() onToggle: EventEmitter<void> = new EventEmitter<void>();

  onToggleValue() {
    if (!this.onToggle) return;
    this.onToggle.emit();
  }
}
