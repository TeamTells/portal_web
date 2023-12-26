import { Injectable } from '@angular/core';
import { DepartmentEntity } from '../components/department/department.component';
import { EmployeeItemEntity } from '../components/employee-item/employee-item.component';
import { DepartmentWithEmployeesDto } from 'src/app/features/employees/data/dto/department-with-employees-dto';
import { EmployeeFullDto } from 'src/app/features/employees/data/dto/employee-full-dto';
import { DepartmentItemDto } from 'src/app/features/employees/data/dto/department-item-dto';
import { DepartmentFullDto } from './dto/department-full-dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeesDataService {
  public departments: DepartmentWithEmployeesDto[] = [
    {
      id: 1,
      name: 'Головной офис Йошкар-Ола',
      departments: [
        {
          id: 3,
          name: 'Охрана',
          departments: [],
          employees: [
            {
              id: 3,
              firstName: 'Сергей',
              secondName: 'Исхаков',
              surname: '',
              dateOfBirth: '1990-02-08',
              telephoneNumber: '',
              email: 'se.isxakov@mail.ru',
              icon: '',
            },
          ],
        },
      ],
      employees: [
        {
          id: 4,
          firstName: 'Воронин',
          secondName: 'Дмитрий',
          surname: '',
          dateOfBirth: '1990-02-08',
          telephoneNumber: '',
          email: 'de.voronin@mail.ru',
          icon: '',
        },
      ],
    },
    {
      id: 2,
      name: 'Головной офис Йошкар-Ола',
      departments: [
        {
          id: 4,
          name: 'Охрана',
          departments: [],
          employees: [
            {
              id: 7,
              firstName: 'Сергей',
              secondName: 'Исхаков',
              surname: '',
              dateOfBirth: '1990-02-08',
              telephoneNumber: '',
              email: 'se.isxakov@mail.ru',
              icon: '',
            },
          ],
        },
      ],
      employees: [
        {
          id: 8,
          firstName: 'Воронин',
          secondName: 'Дмитрий',
          surname: '',
          dateOfBirth: '1990-02-08',
          telephoneNumber: '',
          email: 'de.voronin@mail.ru',
          icon: '',
        },
      ],
    },
  ];
  public employees: EmployeeFullDto[] = [
    {
      id: 9,
      firstName: 'Воронин',
      secondName: 'Дмитрий',
      surname: '',
      dateOfBirth: '1990-02-08',
      telephoneNumber: '',
      email: 'de.voronin@mail.ru',
      icon: '',
    },
    {
      id: 10,
      firstName: 'Сергей',
      secondName: 'Исхаков',
      surname: '',
      dateOfBirth: '1990-02-08',
      telephoneNumber: '',
      email: 'se.isxakov@mail.ru',
      icon: '',
    },
  ];
  
  public ConvertToDepartmentEntityList(
    departments: DepartmentWithEmployeesDto[]
  ): DepartmentEntity[] {
    let departmentsEntitys: DepartmentEntity[] = [];
    if (departments != null)
    {
      departments.forEach((element) => {
        departmentsEntitys.push({
          id: element.id,
          name: element.name,
          isSelect: false,
          visibleContent: false,
          supervisor: null,
          departments: this.ConvertToDepartmentEntityList(element.departments),
          employees: this.ConvertToEmployeeItemEntityList(element.employees),
        });
      });
    }
    return departmentsEntitys;
  }

  public ConvertItemsToDepartmentEntityList(
    departments: DepartmentItemDto[]
  ): DepartmentEntity[] {
    let departmentsEntitys: DepartmentEntity[] = [];
    if (departments != null)
    {
      departments.forEach((element) => {
        departmentsEntitys.push({
          id: element.id,
          name: element.name,
          isSelect: false,
          visibleContent: false,
          supervisor: null,
          departments: this.ConvertItemsToDepartmentEntityList(element.departments),
          employees: [],
        });
      });
    }
    return departmentsEntitys;
  }

  public ConvertToDepartmentEntity(
    department: DepartmentWithEmployeesDto
  ): DepartmentEntity {
    return {
      id: department.id,
      name: department.name,
      isSelect: false,
      visibleContent: false,
      supervisor: null,
      departments: this.ConvertToDepartmentEntityList(department.departments),
      employees: this.ConvertToEmployeeItemEntityList(department.employees),
    };
  }

  public ConvertDepartmentFullToDepartmentEntity(
    department: DepartmentFullDto
  ): DepartmentEntity {
    return {
      id: department.id,
      name: department.name,
      isSelect: false,
      visibleContent: false,
      supervisor: {
        id: department.supervisor.id,
        img: '',
        name: department.supervisor.name,
        mail: ''
      },
      departments: this.ConvertToDepartmentEntityList(department.departments),
      employees: this.ConvertToEmployeeItemEntityList(department.employees),
    };
  }

  public ConvertToEmployeeItemEntityList(
    employeeDtos: EmployeeFullDto[]
  ): EmployeeItemEntity[] {
    let result: EmployeeItemEntity[] = [];

    if(employeeDtos != null)
    {
      employeeDtos.forEach((element) => {
        result.push(this.ConvertToEmployeeItemEntity(element));
      });
    }
    return result;
  }

  public ConvertToEmployeeItemEntity(
    employee: EmployeeFullDto
  ): EmployeeItemEntity {
    return {
      id: employee.id,
      img: employee.icon,
      name: employee.firstName + " " + employee.secondName,
      isSelect: false,
      mail: employee.email,
    };
  }
}

export interface EmployeeDto {
  id: number;
  img: string;
  name: string;
  mail: string;
}

export interface DepartmentDto {
  id: number;
  name: string;
  supervisor: EmployeeDto;
  departments: DepartmentDto[];
  employees: EmployeeDto[];
}
