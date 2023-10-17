import { Component, Input, OnInit } from '@angular/core';
import { EmployeeEntity } from '../employee-item/employee-item.component';
import { EmployeesNavigator, MenuNavItem } from '../../navigation/employees-navigator';

@Component({
  selector: 'app-core-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit{
  @Input() public department: DepartmentEntity = {
    id: -1,
    name: "Department",
    supervisor: {
      id: -1,
      name: "test supervisor",
      mail: "",
      img: ""
    },
    departments: [],
    employees: []
  };
  
  show: boolean = false;
  countOfEmployees: number = 0;

  constructor(private navigator: EmployeesNavigator) {}
  
  ngOnInit(): void {
    this.getCountEmployees(this.department);
  }

  getCountEmployees(folder: DepartmentEntity):void
  {
    this.countOfEmployees += folder.employees.length;
    folder.departments.forEach(element => {
      this.getCountEmployees(element);
    });
  }
  
  showTrigger(): void
  { 
    this.show = !this.show;
  }

  onDepartmentClick(): void
  {
    this.navigator.showContent(MenuNavItem.DEPARTMENT)
  }
}

export interface DepartmentEntity{
  id: number,
  name: string,
  supervisor: EmployeeEntity,
  departments: DepartmentEntity[],
  employees: EmployeeEntity[]
} 