import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeItemEntity } from '../employee-item/employee-item.component';
import { EmployeesNavItem, EmployeesNavigator } from '../../navigation/employees-navigator';
import { EmployeeDto, EmployeesDataService } from '../../data/employees-data-service';

@Component({
  selector: 'app-core-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent implements OnInit {
  @Input() public department: DepartmentEntity = {
    id: -1,
    name: "Not found department",
    isSelect: false,
    visibleContent: false,
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
  countOfEmploees: number = 0;

  @Output() arrowClicked = new EventEmitter<DepartmentEntity>()
  @Output() ctrlClicked = new EventEmitter<DepartmentEntity>()
  @Output() employeeCtrlClicked = new EventEmitter<EmployeeItemEntity>()

  constructor(private navigator: EmployeesNavigator){}

  ngOnInit(): void {
    this.countOfEmploees = this.getCountEmployees(this.department)
  }

  changeVisibilityContent(): void
  {
    this.department.visibleContent = !this.department.visibleContent
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
    this.ctrlClicked.emit(department)
  }

  employeeClicked(employee: EmployeeItemEntity): void
  {    
    this.employeeCtrlClicked.emit(employee)
  }

  getMarginOffset(): string
  {
    if(this.department.isSelect)
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
    if(this.department.isSelect)
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
  isSelect: boolean,
  visibleContent: boolean,
  supervisor: EmployeeDto,
  departments: DepartmentEntity[],
  employees: EmployeeItemEntity[]
} 
