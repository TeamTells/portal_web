import { Component } from '@angular/core';
import {
  EmployeesNavItem,
  EmployeesNavigator,
} from '../../navigation/employees-navigator';
import { MenuItemEntity } from './menu-item/menu-item.component';

@Component({
  selector: 'employees-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor(private navigator: EmployeesNavigator) {}

  public onNavItemClick(item: EmployeesNavItem): void {
    this.menuItems.forEach((element) => {
      element.type == item
        ? (element.selected = true)
        : (element.selected = false);
    });
    this.navigator.showContent({navItem: item, params: "", ids: []});
  }

  public menuItems: MenuItemEntity[] = [
    {
      text: 'Пользователи',
      icon: '../../../../assets/menu-employees.svg',
      type: EmployeesNavItem.USERS,
      selected: true,
    },
    {
      text: 'Роли',
      icon: '../../../../assets/menu-roles.svg',
      type: EmployeesNavItem.ROLES,
      selected: false,
    },
  ];
}
