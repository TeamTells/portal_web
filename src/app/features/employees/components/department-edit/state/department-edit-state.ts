import { Injectable } from '@angular/core';
import { EmployeeEntity } from '../../employee-item/employee-item.component';
import { DepartmentEntity } from '../../department/department.component';

@Injectable({
  providedIn: 'root',
})
export class DepartmentEditState {
  readonly name: string = '';
  readonly nameError: string = '';

  readonly supervisor: EmployeeEntity | null = null;
  readonly supervisorError: string = '';

  readonly parentDepartment: DepartmentEntity | null = null;
  readonly parentDepartmentError: string = '';

  readonly employees: EmployeeEntity[] = [
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
