import { Component, Input, OnInit } from '@angular/core';
import { EmployeeEntity } from '../employee-item/employee-item.component';
import { Store } from 'src/app/core/mvi/store';
import { DepartmentState } from './state/department-state';
import { DepartmentExecutor } from './state/department-executor';
import { DepartmentAction, DepartmentActionTypes } from './state/department-action';
import { DepartmentResultAction } from './state/department-result-action';
import { DepartmentReducer } from './state/department-reducer';

@Component({
  selector: 'app-core-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})

export class DepartmentComponent extends Store<DepartmentState, DepartmentExecutor, DepartmentAction, DepartmentResultAction> implements OnInit {
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
  
  protected readonly DepartmentActionTypes = DepartmentActionTypes;

  constructor(
    state: DepartmentState,
    executor: DepartmentExecutor,
    reducer: DepartmentReducer) {
      super(state, executor, reducer)
    }
  
  ngOnInit(): void {
    this.performAction({type: DepartmentActionTypes.GET_COUNT_EMPLOYEES, department: this.department})
  }
}

export interface DepartmentEntity{
  id: number,
  name: string,
  supervisor: EmployeeEntity,
  departments: DepartmentEntity[],
  employees: EmployeeEntity[]
} 
