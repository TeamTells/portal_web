import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class EmployeesNavigator {

  constructor( private router: Router) {
  }

  public showContent(item: MenuNavItem)
  {
    switch (item) {
      case MenuNavItem.ROLES:
        this.router.navigate(['employees/roles'])
        break
      case MenuNavItem.USERS:
        this.router.navigate(['employees'])
        break
      case MenuNavItem.NEW_EMPLOYEE:
        this.router.navigate(['employees/new-employee'])
    }
  }
}

export enum MenuNavItem{
  USERS,
  ROLES,
  NEW_EMPLOYEE
}
