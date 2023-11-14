import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeEntity } from '../employee-item/employee-item.component';
import { EmployeesNavItem, EmployeesNavigator } from '../../navigation/employees-navigator';
import { EmployeesDataService } from '../../data/employees-data-service';

@Component({
  selector: 'app-core-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit {
  @Input() public department: DepartmentEntity = {
    id: -1,
    name: "Not found department",
    supervisor: {
      id: -1,
      name: "test supervisor",
      mail: "",
      img: ""
    },
    departments: [],
    employees: []
  };

  @Input() public offset: number = 0
  oneOffsetStepSize = 36

  @Input() public employeeVisible: boolean = true

  @Output() ctrlClicked = new EventEmitter<DepartmentEntity>()
  @Output() employeeCtrlClicked = new EventEmitter<EmployeeEntity>()

  isSelected: boolean = false
  visibility: boolean = false;
  countOfEmploees: number = 0;

  constructor(private navigator: EmployeesNavigator,
    private data: EmployeesDataService) {
  }

  ngOnInit(): void {
    this.countOfEmploees = this.getCountEmployees(this.department)
  }

  departmentClicked(event: any): void
  {
    if (event.ctrlKey)
    {
      this.ctrlClicked.emit(this.department)
    }
    else
    {
      this.navigator.showContent({navItem: EmployeesNavItem.DEPARTMENT, params: this.department.id.toString()})
    }
  }

  chieldDepartmentClicked(department: DepartmentEntity): void
  {
    if(this.data.selectedDepartments.indexOf(this.department) != -1)
    {
      this.data.selectedDepartments.splice(this.data.selectedDepartments.indexOf(this.department), 1)
    }
    this.ctrlClicked.emit(department)
  }

  employeeClicked(employee: EmployeeEntity): void
  {
    if(this.data.selectedDepartments.indexOf(this.department) != -1)
    {
      this.data.selectedDepartments.splice(this.data.selectedDepartments.indexOf(this.department), 1)
    }
    
    this.employeeCtrlClicked.emit(employee)
  }

  getMarginOffset(): string
  {
    this.isSelected = this.data.selectedDepartments.indexOf(this.department) >= 0
    if(this.isSelected)
    {
      return 0 + 'px'
    }
    else
    {
      return this.offset + 'px'
    }
  }

  getPaddingOffset(): string
  {
    if(this.isSelected)
    {
      return (this.offset + 8) + 'px'
    }
    else
    {
      return 8 + 'px'
    }
  }


  public getCountEmployees(folder: DepartmentEntity): number
  {
    let counter = folder.employees.length;
    folder.departments.forEach(element => {
      counter += this.getCountEmployees(element);
    });
    return counter;
  }
}



export interface DepartmentEntity {
  id: number,
  name: string,
  supervisor: EmployeeEntity,
  departments: DepartmentEntity[],
  employees: EmployeeEntity[]
} 
