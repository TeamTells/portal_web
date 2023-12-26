import { Component } from '@angular/core';
import { DepartmentEntity } from '../department/department.component';
import { EmployeesDataService } from '../../data/employees-data-service';
import { ActivatedRoute, Router } from '@angular/router';
import {
  EmployeesNavItem,
  EmployeesNavigator,
} from '../../navigation/employees-navigator';
import { DepartmentService } from '../../data/department-service';

@Component({
  selector: 'department-info',
  templateUrl: './department-info.component.html',
})
export class DepartmentInfoComponent {
  public countOfEmployees: number = 0;
  public department: DepartmentEntity = {
    id: 0, 
    name: '',
    isSelect: false,
    visibleContent: false,
    supervisor: {
      id: 0,
      img: '',
      name: '',
      mail: ''
    },
    departments: [],
    employees: []
  }

  constructor(private dataService: EmployeesDataService,
    private navigator: EmployeesNavigator,
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router) 
    {
        let id = this.route.snapshot.paramMap.get('id')

        departmentService.getDepartment(Number(id)).subscribe((dep)=>{
          this.department = dataService.ConvertDepartmentFullToDepartmentEntity(dep.department)
          this.getCountEmployees(this.department)
          })
    }

  getCountEmployees(department: DepartmentEntity):void
  {
    this.countOfEmployees += department.employees.length;
    department.departments.forEach(element => {
      this.getCountEmployees(element);
    });
  }

  editDepartment() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.EDIT_DEPARTMENT,
      params: '' + this.department.id,
      ids: []
    });
  }

  strings = {
    change: 'Изменить',
    supervisor: 'Руководитель',
    participants: 'Участники',
    emptyText: 'В отделе нет подразделений и сотрудников',
    add: 'Добавить',
  };

  isEmptyDepartment(): boolean {
    return (
      this.department.employees.length == 0 &&
      this.department.departments.length == 0
    );
  }

  onChangeClicked(): void {}

  onAddClicked(): void {}
}
