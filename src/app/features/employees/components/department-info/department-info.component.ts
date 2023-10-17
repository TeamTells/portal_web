import { Component, Input } from '@angular/core';
import { DepartmentEntity } from '../department/department.component';

@Component({
  selector: 'department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.scss']
})
export class DepartmentInfoComponent {
  public countOfEmployees: number = 0;

  @Input() public department: DepartmentEntity = 
  {
    id: -1,
    name: "Безопасность",
    supervisor: {
      id: -1,
      name: "Елкин Николай Петрович",
      mail: "de.voronin@mail.ru",
      img: ""
    },
    departments: [
      {
        id: -1,
        name: "Безопасность",
        supervisor: {
          id: -1,
          name: "Елкин Николай Петрович",
          mail: "de.voronin@mail.ru",
          img: ""
        },
        departments: [
          
        ],
        employees: [
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
      }
    ],
    employees: [
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
  }

  ngOnInit(): void {
    this.getCountEmployees(this.department);
  }

  getCountEmployees(department: DepartmentEntity):void
  {
    this.countOfEmployees += department.employees.length;
    department.departments.forEach(element => {
      this.getCountEmployees(element);
    });
  }

  strings = 
  {
    change: "Изменить",
    supervisor: "Руководитель", 
    participants: "Участники",
    emptyText: "В отделе нет подразделений и сотрудников",
    add: "Добавить"
  }

  isEmptyDepartment(): boolean
  {
    return this.department.employees.length == 0 && this.department.departments.length == 0
  }

  onChangeClicked(): void
  {

  }

  onAddClicked(): void
  {

  }
}
