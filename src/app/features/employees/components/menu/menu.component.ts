import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItemEntity } from './menu-item/menu-item.component';
import { EmployeesNavigator, EmployeesNavItem } from '../../navigation/employees-navigator';

@Component({
  selector: 'employees-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private navigator: EmployeesNavigator) {}

  public onNavItemClick(item: EmployeesNavItem): void {
    this.menuItems.forEach((element) => {
      element.type == item ? element.selected = true : element.selected = false
    });
    this.navigator.showContent({navItem: item, params: ""});
  }

  public menuItems: MenuItemEntity[] = [
    {
      text: "Пользователи",
      icon: "../../../../assets/menu-employees.svg",
      type: EmployeesNavItem.USERS,
      selected: true
    },
    {
      text: "Роли",
      icon: "../../../../assets/menu-roles.svg",
      type: EmployeesNavItem.ROLES,
      selected: false
    }
  ]
}
