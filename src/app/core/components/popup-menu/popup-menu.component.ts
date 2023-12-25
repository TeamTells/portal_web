import {
  Component,
  ContentChild,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { PopupMenuButtonComponent } from './popup-menu-button/popup-menu-button.component';
import { PopupMenuContentComponent } from './popup-menu-content/popup-menu-content.component';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
})
export class PopupMenuComponent {
  @ContentChild(PopupMenuButtonComponent)
  buttonComponent?: PopupMenuButtonComponent;
  @ContentChild(PopupMenuContentComponent)
  contentComponent?: PopupMenuContentComponent;
  @Input() leftOffset = 0;
  @Input() topOffset = 0;
  @Output() onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected isActive = false;

  private changeVisibility() {
    if (!this.onToggle) return;
    this.onToggle.emit(this.isActive);

    if (this.contentComponent) {
      this.contentComponent.hidenStyle = this.isActive ? 'block' : 'hidden';
      this.contentComponent.leftOffset = `${this.leftOffset}px`;
      this.contentComponent.topOffset = `${this.topOffset}px`;
    }
  }

  @HostListener('document:click', ['$event.target'])
  private onClickedOutside(target: HTMLElement) {
    if (!this.contentComponent || !this.buttonComponent) return;

    const clickedOnButton =
      this.buttonComponent.buttonContent.nativeElement.contains(target);
    const clickedOnMenu =
      this.contentComponent.menuContent.nativeElement.contains(target);

    if (clickedOnButton) {
      this.isActive = !this.isActive;
      this.changeVisibility();
    } else if (!clickedOnMenu && this.isActive) {
      this.isActive = !this.isActive;
      this.changeVisibility();
    }
  }
}
