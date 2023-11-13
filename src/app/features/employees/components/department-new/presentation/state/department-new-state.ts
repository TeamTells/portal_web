import { Injectable } from '@angular/core';
import { EmployeeEntity } from '../../../employee-item/employee-item.component';
import { DepartmentEntity } from '../../../department/department.component';

@Injectable({
  providedIn: 'root',
})
export class DepartmentNewState {
  readonly name: string = '';
  readonly nameError: string = '';

  readonly supervisor: EmployeeEntity | null = null;
  readonly supervisorError: string = '';

  readonly parentDepartment: DepartmentEntity | null = null;
  readonly parentDepartmentError: string = '';

  readonly employees: EmployeeEntity[] = [];
}
