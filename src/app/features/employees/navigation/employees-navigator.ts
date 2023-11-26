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
        this.router.navigate(['employees/roles']);
        break;
      case EmployeesNavItem.USERS:
        this.router.navigate(['employees']);
        break;
      case EmployeesNavItem.NEW_EMPLOYEE:
        this.router.navigate(['employees/new-employee/']);
        break;
      case EmployeesNavItem.EDIT_EMPLOYEE:
        this.router.navigate(['employees/edit-employee/']);
        break;
      case EmployeesNavItem.DEPARTMENT:
        this.router.navigate(['employees/department/' + item.params]);
        break;
      case EmployeesNavItem.NEW_DEPARTMENT:
        this.router.navigate(['employees/new-department/']);
        break;
      case EmployeesNavItem.EDIT_DEPARTMENT:
        this.router.navigate(['employees/edit-department/']);
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
}
