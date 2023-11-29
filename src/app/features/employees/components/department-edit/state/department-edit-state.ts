import { Injectable } from '@angular/core';
import { DepartmentEntity } from '../../department/department.component';
import { EmployeeDto } from '../../../data/employees-data-service';

export interface IDepartmentEditState {
  readonly name: string;
  readonly supervisor: EmployeeDto | null;
  readonly parentDepartment: DepartmentEntity | null;
  readonly employees: EmployeeDto[];
}

@Injectable({
  providedIn: 'root',
})
export class DepartmentEditState implements IDepartmentEditState {
  readonly name: string = '';
  readonly nameError: string = '';

  readonly supervisor: EmployeeDto | null = null;
  readonly supervisorError: string = '';

  readonly parentDepartment: DepartmentEntity | null = null;
  readonly parentDepartmentError: string = '';

  readonly employees: EmployeeDto[] = [
    {
      id: 1,
      img: 'https://cdn.betterttv.net/emote/6436b06d48b8cab3008407d4/3x.png',
      mail: 'firdavsinurov@site.com',
      name: 'Фирдавси Нуров',
    },
    {
      id: 2,
      img: 'https://cdn.betterttv.net/emote/6436b06d48b8cab3008407d4/3x.png',
      mail: '',
      name: 'Firdavsi Nurov',
    },
    {
      id: 3,
      img: '',
      mail: '',
      name: '',
    },
  ];
}
