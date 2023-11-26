import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-popup-menu-button',
  templateUrl: './popup-menu-button.component.html'
})
export class PopupMenuButtonComponent {
  @Output() isActiveEmitter = new EventEmitter<boolean>();
  private _isActive: boolean = false;
  
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent){
    this.isActiveEmitter.emit(this._isActive);
    this._isActive = !this._isActive;
  }
}
