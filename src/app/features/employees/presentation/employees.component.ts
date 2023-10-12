import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presentation',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {
  constructor(private router: Router){}

  showContent(item: MenuNavItem)
  {
    switch (item) {
      case MenuNavItem.ROLES:
        this.router.navigate(['employees/roles'])
        break
      case MenuNavItem.USERS:
        this.router.navigate(['employees'])
        break
    }
  }
}

export enum MenuNavItem{
  USERS,
  ROLES
}