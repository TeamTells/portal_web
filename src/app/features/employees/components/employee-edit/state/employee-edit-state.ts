import { Injectable } from '@angular/core';
import { DepartmentEntity } from '../../department/department.component';
import { RoleEntity } from '../../roles/role-item/role-item.component';

export interface IEmployeeEditState {
  readonly firstName: string;
  readonly lastName: string;
  readonly patronymic: string;
  readonly email: string;
  readonly dateOfBirth: string;
  readonly password: string;
  readonly department: DepartmentEntity | null;
  readonly roles: RoleEntity[];
  readonly selectedRoles: RoleEntity[];
  readonly jobTitle: string;
  readonly phoneNumber: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeEditState implements IEmployeeEditState {
  readonly jobTitle: string = '';
  readonly jobTitleError: string = '';

  readonly phoneNumber: string = '';
  readonly phoneNumberError: string = '';

  readonly firstName: string = '';
  readonly firstNameError: string = '';

  readonly lastName: string = '';
  readonly lastNameError: string = '';

  readonly patronymic: string = '';

  readonly dateOfBirth: string = '';
  readonly dateOfBirthError: string = '';

  readonly email: string = '';
  readonly emailError: string = '';

  readonly password: string = '';
  readonly passwordError: string = '';

  readonly department: DepartmentEntity | null = null;

  readonly roles: RoleEntity[] = [
    {
      id: 4,
      role: 'Читатель',
      description:
        'Имеет возможность читать новости, оставлять под ними комментарии, проявлять эмоции',
    },
    {
      id: 3,
      role: 'Редактор',
      description:
        'Имеет возможность создавать и редактировать новости в приложении, но не имеет полного доступа к управлению приложением',
    },
    {
      id: 2,
      role: 'Администратор',
      description: 'Имеет полный доступ к управлению платформы',
    },

    {
      id: 1,
      role: 'Владелец',
      description: 'Имеет полный доступ к управлению платформы',
    },
  ];

  readonly selectedRoles: RoleEntity[] = [
    {
      id: 4,
      role: 'Читатель',
      description:
        'Имеет возможность читать новости, оставлять под ними комментарии, проявлять эмоции',
    },
  ];

  readonly isLoading = false;
}
