import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ProfileNavItem } from '../profile-navigator';

export interface ProfileMenuItemEntity{
  type:ProfileNavItem,
  selected: boolean,
};


@Component({
  selector: 'app-profile-menu-item',
  templateUrl: './profile-menu-item.component.html',

})
export class ProfileMenuItemComponent {
  @Input()
  public params!: ProfileMenuItemEntity;

  @Output() public navigate: EventEmitter<ProfileNavItem> = new EventEmitter<ProfileNavItem>();

  @HostListener('click', ['$event'])
  public onNavItemClick(event: MouseEvent): void {
    this.navigate.emit(this.params.type);
  }
}
