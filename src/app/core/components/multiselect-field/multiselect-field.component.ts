import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DropdownItem } from '../dropdown-field/dropdown-field.component';

@Component({
  selector: 'app-core-multiselect-field',
  templateUrl: './multiselect-field.component.html',
})
export class MultiselectFieldComponent {
  constructor(private el: ElementRef) {}

  @Input() class: string | string[] = [];
  @Input() items: DropdownItem[] = [];
  @Input() error?: string;
  @Input() placeholder: string = 'Выберите элемент';
  @Input() selectedItems: DropdownItem[] = [];
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUnselect: EventEmitter<string> = new EventEmitter<string>();

  getNonSelectedItems(): DropdownItem[] {
    return this.items.filter(
      (item) =>
        !this.selectedItems.some((selectedItem) => selectedItem.id === item.id)
    );
  }

  onSelectItem(id: string) {
    if (!this.getNonSelectedItems().find((item) => item.id == id)) return;

    if (this.onSelect) {
      this.onSelect.emit(id);
    }
  }

  onUnselectItem(id: string) {
    if (this.onUnselect) {
      this.onUnselect.emit(id);
    }
  }
}
