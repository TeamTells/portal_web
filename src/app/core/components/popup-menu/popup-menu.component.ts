import { AfterViewInit, Component, ContentChild, Input } from '@angular/core';
import { PopupMenuButtonComponent } from './popup-menu-button/popup-menu-button.component';
import { Subscription } from 'rxjs';
import { PopupMenuContentComponent } from './popup-menu-content/popup-menu-content.component';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html'
})
export class PopupMenuComponent implements AfterViewInit{
  @ContentChild(PopupMenuButtonComponent) buttonComponent?: PopupMenuButtonComponent;
  @ContentChild(PopupMenuContentComponent) contentComponent?: PopupMenuContentComponent;
  @Input() leftOffset: number = 0;
  @Input() topOffset: number = 0;
  
  private buttonSubscription?: Subscription;

  private onActivation(val: boolean): void{
    if(this.contentComponent){
     this.contentComponent.hidenStyle = (val) ? "hidden" : "block";
    }
    if(this.contentComponent){
      this.contentComponent.leftOffset = `${this.leftOffset}px`;
      this.contentComponent.topOffset =  `${this.topOffset}px`;
    }
  }

  ngAfterViewInit(): void {
    if(!this.buttonComponent) {
      return;
    }
    this.buttonSubscription = this.buttonComponent.isActiveEmitter.subscribe(this.onActivation.bind(this));
  }

  ngOnDestroy() {
    if (this.buttonSubscription) {
      this.buttonSubscription.unsubscribe();
    }
  }
}
