import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-popup-menu-button',
  templateUrl: './popup-menu-button.component.html',
})
export class PopupMenuButtonComponent {
  @Input() class: string | string[] = [];
  @Output() isActiveEmitter = new EventEmitter<boolean>();
  private _isActive: boolean = false;

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.isActiveEmitter.emit(this._isActive);
    this._isActive = !this._isActive;
  }
}
