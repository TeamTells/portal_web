import { Component, Input, OnInit } from '@angular/core';
import { EmployeeEntity } from '../employee-item/employee-item.component';

@Component({
  selector: 'app-core-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit{
  @Input() public department: DepartmentEntity = {
    id: -1,
    name: "Department",
    departments: [],
    employees: []
  };
  
  show: boolean = false;
  countOfEmployees: number = 0;
  
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
}

export interface DepartmentEntity{
  id: number,
  name: string,
  departments: DepartmentEntity[],
  employees: EmployeeEntity[]
} 