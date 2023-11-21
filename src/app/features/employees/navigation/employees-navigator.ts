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
      case EmployeesNavItem.DEPARTMENT:
        this.router.navigate(['employees/department/' + item.params]);
        break;
      case EmployeesNavItem.NEW_DEPARMENT:
        this.router.navigate(['employees/new-department/']);
        break;
    }
  }
}

export enum EmployeesNavItem {
  USERS,
  ROLES,
  NEW_EMPLOYEE,
  DEPARTMENT,
  NEW_DEPARMENT,
}

export interface EmployeesNavEntity {
  navItem: EmployeesNavItem;
  params: string;
}
