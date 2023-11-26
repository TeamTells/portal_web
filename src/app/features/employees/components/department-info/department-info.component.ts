import { Component, Input } from '@angular/core';
import { DepartmentEntity } from '../department/department.component';
import { EmployeesDataService } from '../../data/employees-data-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.scss']
})
export class DepartmentInfoComponent {
  public countOfEmployees: number = 0;
  public department!: DepartmentEntity

  constructor(private dataService: EmployeesDataService,
    private route: ActivatedRoute) 
    {
      let findDepartment = dataService.departments.find((element)=>{
        element.id.toString() == this.route.snapshot.paramMap.get('id')
      })
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
