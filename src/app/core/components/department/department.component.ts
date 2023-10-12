import { Component, Input, OnInit } from '@angular/core';
import { IDepartment } from '../../interfaces/idepartment';

@Component({
  selector: 'app-core-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit{
  @Input() public department: IDepartment = {
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

  getCountEmployees(folder: IDepartment):void
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
