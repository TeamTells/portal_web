import { Component, Input } from '@angular/core';
import {
  EmployeesNavItem,
  EmployeesNavigator,
} from '../../navigation/employees-navigator';
@Component({
  selector: 'app-core-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss'],
})
export class EmployeeItemComponent {
  constructor(private navigator: EmployeesNavigator) {}

  showDots: boolean = false;

  @Input() public employee: EmployeeEntity = {
    id: -1,
    img: '',
    name: 'Name',
    mail: 'mail@mail.ru',
  };

  editEmployee() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.EDIT_EMPLOYEE,
      params: '',
    });
  }

  onMouseOver(): void {
    this.showDots = true;
  }

  onMouseOut(): void {
    this.showDots = false;
  }

  strings = {
    actions: {
      edit: 'Редактировать',
      move: 'Переместить в другой отдел',
      delete: 'Удалить',
    },
  };
}

export interface EmployeeEntity {
  id: number;
  img: string;
  name: string;
  mail: string;
}
