import { Component, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

type DropdownItem = {
  id: string,
  name: string,
}

@Component({
  selector: 'app-core-dropdown-field',
  templateUrl: './dropdown-field.component.html',
})
export class DropdownFieldComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input() class: string | string[] = [];
  @Input() items: DropdownItem[] = [];
  @Input() error?: string;
  @Input() placeholder: string = 'Выберите элемент';
  @Input() selectedItem?: DropdownItem;
  @Input() onSelect?: (id: string) => void;

  opened = false;

  switch() {
    this.opened = !this.opened;
  }

  onSelectItem(id: string) {
    if (this.onSelect) {
      this.onSelect(id);
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
