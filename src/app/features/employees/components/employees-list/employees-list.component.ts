import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentEntity } from 'src/app/features/employees/components/department/department.component';
import { EmployeeEntity } from 'src/app/features/employees/components/employee-item/employee-item.component';
import { EmployeesNavigator, MenuNavItem } from '../../navigation/employees-navigator';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  constructor(private navigator: EmployeesNavigator){}

  onCreateClick(): void
  {
    this.navigator.showContent(MenuNavItem.NEW_EMPLOYEE);
  }

  mock_folder: DepartmentEntity = {
    id: -1,
    name: "Головной офис Йошкар-Ола",
    departments: [ 
      {
        id: -1,
        name: "Охрана",
        departments: [],
        employees: [
          {
            id: -1,
            name: "Сергей Исхаков",
            mail: "se.isxakov@mail.ru",
            img: ""
          }
        ]
      }
    ],
    employees: [
      {
        id: -1,
        name: "Воронин Дмитрий",
        mail: "de.voronin@mail.ru",
        img: ""
      }
    ]
  };

  mock_employees: EmployeeEntity[] = [
    {
      id: -1,
      name: "Воронин Дмитрий",
      mail: "de.voronin@mail.ru",
      img: ""
    },
    {
      id: -1,
      name: "Сергей Исхаков",
      mail: "se.isxakov@mail.ru",
      img: ""
    }
  ]

  strings = {
    users: "Пользователи",
    create: "Создать"
  }
}
