import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItemEntity } from './menu-item/menu-item.component';
import { EmployeesNavigator, MenuNavItem } from '../../navigation/employees-navigator';

@Component({
  selector: 'employees-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private navigator: EmployeesNavigator) {}

  public onNavItemClick(item: MenuNavItem): void {
    this.menuItems.forEach((element) => {
      element.type == item ? element.selected = true : element.selected = false
    });
    this.navigator.showContent(item);
  }

  public menuItems: MenuItemEntity[] = [
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
