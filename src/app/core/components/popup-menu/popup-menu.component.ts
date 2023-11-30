import {
  Component,
  ContentChild,
  HostListener,
  Input,
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
  @Input() leftOffset: number = 0;
  @Input() topOffset: number = 0;
  private isActive: boolean = false;

  private changeVisability(){
    if (this.contentComponent) {
      this.contentComponent.hidenStyle =  this.isActive ? 'block' : 'hidden';
    }
    if (this.contentComponent) {
      this.contentComponent.leftOffset = `${this.leftOffset}px`;
      this.contentComponent.topOffset = `${this.topOffset}px`;
    }
  }

  private onActivation(val: boolean): void {
    this.isActive = !this.isActive;
    this.changeVisability();
  }

  @HostListener('document:click', ['$event.target'])
  private _onClickedOutside(target: any): void{
    if (this.contentComponent && this.buttonComponent) {
      const clickedOnButton = this.buttonComponent.buttonContent.nativeElement.contains(target);
      if (clickedOnButton){
        this.isActive = !this.isActive;
        this.changeVisability();
        return;
      }
      const clickedOnMenu = this.contentComponent.menuContent.nativeElement.contains(target);
      if (!clickedOnMenu && !clickedOnButton && this.isActive){
        this.isActive = !this.isActive;
        this.changeVisability();
        return;
      }
    }
  }
}
