import { Component } from '@angular/core';
import { IEmployee } from 'src/app/core/interfaces/iemployee';
import { IDepartment } from 'src/app/core/interfaces/idepartment';
import { Router } from '@angular/router';

@Component({
  selector: 'employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent {
  constructor(private router: Router){}

  onCreateClick(): void
  {
    this.router.navigate(['employees/new-employee'])
  }

  mock_folder: IDepartment = {
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

  mock_employees: IEmployee[] = [
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
