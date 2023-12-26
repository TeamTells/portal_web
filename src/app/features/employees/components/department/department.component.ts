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
  @Input() employeesVisible: boolean = true

  @Output() arrowClicked = new EventEmitter<DepartmentEntity>()
  @Output() ctrlClicked = new EventEmitter<DepartmentEntity>()
  @Output() clicked = new EventEmitter<DepartmentEntity>()
  @Output() employeeClicked = new EventEmitter<EmployeeItemEntity>()
  @Output() employeeCtrlClicked = new EventEmitter<EmployeeItemEntity>()
  @Output() deleteClicked = new EventEmitter<DepartmentEntity>()
  constructor(
    private navigator: EmployeesNavigator
  ) {}

  ngOnInit(): void {
    this.countOfEmploees = this.getCountEmployees(this.department)
  }

  editDepartment(){
    this.navigator.showContent({
      navItem: EmployeesNavItem.EDIT_DEPARTMENT,
       params: this.department.id.toString(),
       data:{}
    })
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
      this.clicked.emit(this.department)
    }
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
  strings = {
    actions: {
      edit: 'Редактировать',
      move: 'Переместить в другой отдел',
      delete: 'Удалить',
    },
  };
}



export interface DepartmentEntity {
  id: number,
  name: string,
  isSelect: boolean,
  visibleContent: boolean,
  supervisor: EmployeeDto | null,
  departments: DepartmentEntity[],
  employees: EmployeeItemEntity[]
} 
