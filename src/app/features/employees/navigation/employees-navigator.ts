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
        this.router.navigate(['employees/roles' + item.params]);
        break;
      case EmployeesNavItem.USERS:
        this.router.navigate(['employees' + item.params]);
        break;
      case EmployeesNavItem.NEW_EMPLOYEE:
        this.router.navigate(['employees/new-employee/' + item.params]);
        break;
      case EmployeesNavItem.EDIT_EMPLOYEE:
        this.router.navigate(['employees/edit-employee/' + item.params]);
        break;
      case EmployeesNavItem.DEPARTMENT:
        this.router.navigate(['employees/department/' + item.params]);
        break;
      case EmployeesNavItem.NEW_DEPARTMENT:
        this.router.navigate(['employees/new-department/' + item.params]);
        break;
      case EmployeesNavItem.EDIT_DEPARTMENT:
        this.router.navigate(['employees/edit-department/' + item.params]);
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
