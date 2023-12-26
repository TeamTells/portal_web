import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeesNavItem } from '../../../navigation/employees-navigator';

@Component({
  selector: 'employees-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent {
  @Input() params!: MenuItemEntity;
  @Output() public navigate: EventEmitter<EmployeesNavItem> =
    new EventEmitter<EmployeesNavItem>();

  public onNavItemClick(): void {
    this.navigate.emit(this.params.type);
  }
}

export interface MenuItemEntity {
  icon: string;
  text: string;
  type: EmployeesNavItem;
  selected: boolean;
}
