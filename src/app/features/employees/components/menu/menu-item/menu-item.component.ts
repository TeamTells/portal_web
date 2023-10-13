import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuNavItem } from '../../../navigation/employees-navigator';

@Component({
  selector: 'employees-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() params!: MenuItemEntity;
  @Output() public navigate: EventEmitter<MenuNavItem> = new EventEmitter<MenuNavItem>();

  public onNavItemClick(): void {
      this.navigate.emit(this.params.type);
  }
}

export interface MenuItemEntity{
  icon: string;
  text: string;
  type: MenuNavItem;
  selected: boolean;
}