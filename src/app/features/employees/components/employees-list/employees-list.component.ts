import { Component } from '@angular/core';
import { EmployeesNavigator, EmployeesNavItem } from '../../navigation/employees-navigator';
import { EmployeesSelectSettings, SelectCount, SelectType } from '../employee-select/employee-select.component';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent{
  constructor(private navigator: EmployeesNavigator){}

  onCreateClick(): void
  {
    this.navigator.showContent({navItem: EmployeesNavItem.NEW_EMPLOYEE, params: ""});
  }

  protected readonly employeesSelectSettings: EmployeesSelectSettings =
  {
    toolsVisibile: true,
    blueBoxVisible: true,
    countType: SelectCount.Multiple,
    selectType: SelectType.Employee
  }

  strings = {
    users: "Пользователи",
    create: "Создать"
  }
}
