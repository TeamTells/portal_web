import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

export type DropdownItem = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-core-dropdown-field',
  templateUrl: './dropdown-field.component.html',
})
export class DropdownFieldComponent {
  constructor(private el: ElementRef) {}

  @Input() class: string | string[] = [];
  @Input() items: DropdownItem[] = [];
  @Input() error?: string;
  @Input() placeholder: string = 'Выберите элемент';
  @Input() selectedItem?: DropdownItem;
  @Input() canSelect: boolean = true;
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUnselect: EventEmitter<string> = new EventEmitter<string>();

  opened = false;

  switch() {
    if (!this.onSelect.observed) return;
    this.opened = !this.opened;
  }

  onClickDropwdown() {
    if (this.onClick) {
      this.onClick.emit()
    }
    this.switch()
  }

  onSelectItem(id: string) {
    if (this.onSelect) {
      this.onSelect.emit(id);
    }
    this.switch();
  }

  onUnselectItem(id: string) {
    if (this.onUnselect) {
      this.onUnselect.emit(id);
    }
    this.switch();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (this.opened && !this.el.nativeElement.contains(event.target)) {
      this.opened = false;
    }
  }
}
