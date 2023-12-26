import { Component } from '@angular/core';
import { DepartmentEditState } from './state/department-edit-state';
import { DepartmentEditExecutor } from './state/department-edit-executor';
import {
  DepartmentEditAction,
  DepartmentEditActionTypes,
} from './state/department-edit-action';
import { DepartmentEditResultAction } from './state/department-edit-result-action';
import { Store } from 'src/app/core/mvi/store';
import { DepartmentEditReducer } from './state/department-edit-reducer';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../../data/department-service';

@Component({
  selector: 'department-edit',
  templateUrl: './department-edit.component.html',
})
export class DepartmentEditComponent extends Store<
  DepartmentEditState,
  DepartmentEditExecutor,
  DepartmentEditAction,
  DepartmentEditResultAction
> {
  constructor(
    state: DepartmentEditState,
    executor: DepartmentEditExecutor,
    reducer: DepartmentEditReducer,
    private route: ActivatedRoute,
    private departmentService: DepartmentService
  ) {
    super(state, executor, reducer);
    let id = this.route.snapshot.paramMap.get('id')

    departmentService.getDepartment(Number(id)).subscribe((dep)=>{
      this.performAction({
        type: DepartmentEditActionTypes.INIT_FIELD,
        department: dep.department
      })
    })
  }

  protected readonly DepartmentEditActionTypes = DepartmentEditActionTypes;

  searchStr = '';
  onChangeSearchStr(value: string) {
    this.searchStr = value;
  }

  addEmployees() {
    console.log('Add employees');
  }

  openSelectParentDepartment() {
    console.log('Open select parent department');
  }

  openSelectSipervisor() {
    console.log('Open select sipervisor');
  }

  getSelectedSipervisorDropdownItem() {
    if (this.state.supervisor) {
      return {
        id: this.state.supervisor.id.toString(),
        name: this.state.supervisor.name,
      };
    }

    return undefined;
  }

  getSelectedParentDepartmentDropdownItem() {
    if (this.state.parentDepartment) {
      return {
        id: this.state.parentDepartment.id.toString(),
        name: this.state.parentDepartment.name,
      };
    }

    return undefined;
  }
}
