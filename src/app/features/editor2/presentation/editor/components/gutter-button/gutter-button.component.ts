import {Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

export type DropdownItem = {
  id: string;
  name: string;
};

@Component({
  selector: 'app-gutter-button',
  templateUrl: './gutter-button.component.html',
  styleUrls: ['./gutter-button.component.scss'],
  animations: [
    trigger('dialogAnimation', [
      state('hidden', style({
        opacity: 0,
        display: 'none'
      })),
      state('visible', style({
        opacity: 1,
        display: 'flex'
      })),
      transition('hidden => visible', animate('0.2s ease-in')),
      transition('visible => hidden', animate('0.2s ease-out'))
    ])
  ]
})
export class GutterButtonComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input() top: number = 0;
  @Input() left: number = 0;
  @Input() imageSrc = "assets/plus.circle.svg";
  @Input() isVisible: boolean = false;
  @Input() class: string | string[] = [];
  @Input() items: DropdownItem[] = [];
  @Input() error?: string;
  @Input() placeholder = 'Выберите элемент';
  @Input() selectedItem?: DropdownItem;
  @Output() onSelect= new EventEmitter<string>();
  @Output() onClick = new EventEmitter<void>();

  opened = false;

  switch() {
    this.onClick.emit()
    this.opened = !this.opened;
  }

  onSelectItem(id: string) {
    console.log("SWITCH ", id)
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

  get dialogState() {
    return this.opened ? 'visible' : 'hidden';
  }
}
