import { Component, Input, OnDestroy } from '@angular/core';
import { EmployeesDataService } from '../../data/employees-data-service';
import { DepartmentEntity } from '../department/department.component';
import { EmployeeEntity } from '../employee-item/employee-item.component';

@Component({
  selector: 'employees-select',
  templateUrl: './employee-select.component.html'
})

export class EmployeeSelectComponent implements OnDestroy{
  constructor(private data: EmployeesDataService){
    this.departments = data.departments
    this.employees = data.employees
    data.selectedDepartments = []
    data.selectedEmployees = []
  }

  ngOnDestroy(): void {
    this.data.selectedDepartments = []
    this.data.selectedEmployees = []
  }

  @Input() public settings: EmployeesSelectSettings = {
    toolsVisibile: false,
    blueBoxVisible: false,
    countType: SelectCount.Single,
    selectType: SelectType.Employee
  }

  protected readonly SelectType = SelectType

  public departments: DepartmentEntity[]
  public employees: EmployeeEntity[]

  strings = {
    selected: "выбрано"
  }

  selectDepartment(department: DepartmentEntity): void
  {
    if(!(this.settings.countType == SelectCount.Single && this.settings.selectType == SelectType.Employee))
    {
      const index = this.data.selectedDepartments.indexOf(department)
      if(this.settings.countType == SelectCount.Multiple)
      {
        if(index == -1)
        {
          this.selectChieldDepartments(department)
        }
        else
        {
          this.unselectChieldDepartaments(department)
        }
      }
      else
      {
        if (index == -1)
        {
          this.data.selectedDepartments = []
          this.data.selectedDepartments.push(department);
        }
        else
        {
          this.data.selectedDepartments.splice(index, 1)
        }
      }
      console.log(this.data.selectedDepartments)
      console.log(this.data.selectedEmployees)
    }
  }

  unselectChieldDepartaments(department: DepartmentEntity): void
  {
    this.data.selectedDepartments.splice(this.data.selectedDepartments.indexOf(department), 1)

    department.departments.forEach(dep => {
      if(this.data.selectedDepartments.indexOf(dep) != -1)
      {
        this.unselectChieldDepartaments(dep)
      }
    });
    if(this.settings.selectType == SelectType.Employee)
    {
      department.employees.forEach(employee => {
        if (this.data.selectedEmployees.indexOf(employee) != -1)
        {
          this.data.selectedEmployees.splice(this.data.selectedEmployees.indexOf(employee), 1);
        }
      });  
    }
  }

  selectChieldDepartments(department: DepartmentEntity): void
  {
    this.data.selectedDepartments.push(department)

    department.departments.forEach(dep => {
      if(this.data.selectedDepartments.indexOf(dep) == -1)
      {
        this.selectChieldDepartments(dep)
      }
    });

    if(this.settings.selectType == SelectType.Employee)
    {
      department.employees.forEach(employee => {
        if (this.data.selectedEmployees.indexOf(employee) == -1)
        {
          this.data.selectedEmployees.push(employee);
        }
      });  
    }
  }

  selectEmployee(employee: EmployeeEntity): void
  {
    const i = this.data.selectedEmployees.indexOf(employee);
    if (i == -1)
    {
      if(this.settings.countType == SelectCount.Single)
      {
        this.data.selectedEmployees = []
      }
      this.data.selectedEmployees.push(employee);
    }
    else
    {
      this.data.selectedEmployees.splice(i, 1)
    }
    console.log(this.data.selectedDepartments)
    console.log(this.data.selectedEmployees)
  }

  unselectAll(): void
  {
    this.data.selectedDepartments = []
    this.data.selectedEmployees = []
  }

  isAnySelect(): boolean
  {
    return this.data.selectedEmployees.length + this.data.selectedDepartments.length > 0
  }

  getSelectedCount(): number
  {
    if (this.settings.selectType == SelectType.Department)
    {
      return this.data.selectedDepartments.length
    }
    else
    {
      return this.data.selectedEmployees.length
    }
  }
}

export interface EmployeesSelectSettings{
  toolsVisibile: boolean,
  blueBoxVisible: boolean,
  countType: SelectCount,
  selectType: SelectType
}

export enum SelectCount{ Single, Multiple }
export enum SelectType{ Employee, Department }