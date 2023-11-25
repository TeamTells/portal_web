import { Component } from '@angular/core';
import { EmployeesNavigator, EmployeesNavItem } from '../../navigation/employees-navigator';
import { EmployeeSelectSettings, SelectCount } from '../employee-select/interfaces/employee-select-settings';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
})
export class EmployeesListComponent{
  constructor(private navigator: EmployeesNavigator){}

  onCreateClick(): void {
    this.navigator.showContent({navItem: EmployeesNavItem.NEW_EMPLOYEE, params: ""});
  }

  protected readonly employeesSelectSettings: EmployeeSelectSettings =
  {
    toolsVisible: true,
    blueBoxVisible: true,
    countType: SelectCount.Multiple
  }

  strings = {
    users: "Пользователи",
    create: "Создать",
    employee: 'Сотрудник',
    department: 'Департамент',
  }
}