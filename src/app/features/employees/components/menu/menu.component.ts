import { Component, EventEmitter, Output } from '@angular/core';
import { IMenuItem } from './menu-item/menu-item.component';
import { MenuNavItem } from '../../presentation/employees.component';

@Component({
  selector: 'employees-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() public navigate: EventEmitter<MenuNavItem> = new EventEmitter<MenuNavItem>();

  public onNavItemClick(item: MenuNavItem): void {
    this.menuItems.forEach((element) => {
      element.type == item ? element.selected = true : element.selected = false
    });
    this.navigate.emit(item);
  }

  public menuItems: IMenuItem[] = [
    {
      text: "Пользователи",
      icon: "../../../../assets/menu-employees.svg",
      type: MenuNavItem.USERS,
      selected: true
    },
    {
      text: "Роли",
      icon: "../../../../assets/menu-roles.svg",
      type: MenuNavItem.ROLES,
      selected: false
    }
  ]
}
