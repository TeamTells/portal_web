import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
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
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() class: string | string[] = [];
  @Input() items: DropdownItem[] = [];
  @Input() error?: string;
  @Input() placeholder: string = 'Выберите элемент';
  @Input() selectedItem?: DropdownItem;
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();

  opened = false;

  switch() {
    this.opened = !this.opened;
  }

  onSelectItem(id: string) {
    if (this.onSelect) {
      this.onSelect.emit(id);
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
