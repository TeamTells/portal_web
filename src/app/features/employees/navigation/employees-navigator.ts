import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EmployeesNavigator {
  constructor(private router: Router) {}

  public showContent(item: EmployeesNavEntity) {
    switch (item.navItem) {
      case EmployeesNavItem.ROLES:
        this.router.navigateByUrl('employees/roles', );
        break;
      case EmployeesNavItem.USERS:
        this.router.navigateByUrl('employees');
        break;
      case EmployeesNavItem.NEW_EMPLOYEE:
        this.router.navigateByUrl('employees/new-employee');
        break;
      case EmployeesNavItem.EDIT_EMPLOYEE:
        this.router.navigateByUrl('employees/edit-employee/' + item.params);
        break;
      case EmployeesNavItem.DEPARTMENT:
        this.router.navigateByUrl('employees/department/' + item.params);
        break;
      case EmployeesNavItem.NEW_DEPARTMENT:
        this.router.navigateByUrl('employees/new-department', {state: {data: item.data}});
        break;
      case EmployeesNavItem.EDIT_DEPARTMENT:
        this.router.navigateByUrl('employees/edit-department/' + item.params);
        break;
    }
  }
}

export enum EmployeesNavItem {
  USERS,
  ROLES,
  NEW_EMPLOYEE,
  EDIT_EMPLOYEE,
  DEPARTMENT,
  NEW_DEPARTMENT,
  EDIT_DEPARTMENT,
}

export interface EmployeesNavEntity {
  navItem: EmployeesNavItem;
  params: string;
  data: any // TODO: Не забыть потом сделать через типы
}
