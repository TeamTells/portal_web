import { Injectable } from '@angular/core';
import { DepartmentEntity } from '../components/department/department.component';
import { EmployeeItemEntity } from '../components/employee-item/employee-item.component';

@Injectable({
  providedIn: 'root',
})
export class EmployeesDataService {
  public departments: DepartmentDto[] = [
    {
      id: 1,
      name: 'Головной офис Йошкар-Ола',
      supervisor: {
        id: 1,
        name: 'Сергей Исхаков',
        mail: 'se.isxakov@mail.ru',
        img: '',
      },
      departments: [
        {
          id: 3,
          name: 'Охрана',
          supervisor: {
            id: 2,
            name: 'Сергей Исхаков',
            mail: 'se.isxakov@mail.ru',
            img: '',
          },
          departments: [],
          employees: [
            {
              id: 3,
              name: 'Сергей Исхаков',
              mail: 'se.isxakov@mail.ru',
              img: '',
            },
          ],
        },
      ],
      employees: [
        {
          id: 4,
          name: 'Воронин Дмитрий',
          mail: 'de.voronin@mail.ru',
          img: '',
        },
      ],
    },
    {
      id: 2,
      name: 'Головной офис Йошкар-Ола',
      supervisor: {
        id: 5,
        name: 'Сергей Исхаков',
        mail: 'se.isxakov@mail.ru',
        img: '',
      },
      departments: [
        {
          id: 4,
          name: 'Охрана',
          supervisor: {
            id: 6,
            name: 'Сергей Исхаков',
            mail: 'se.isxakov@mail.ru',
            img: '',
          },
          departments: [],
          employees: [
            {
              id: 7,
              name: 'Сергей Исхаков',
              mail: 'se.isxakov@mail.ru',
              img: '',
            },
          ],
        },
      ],
      employees: [
        {
          id: 8,
          name: 'Воронин Дмитрий',
          mail: 'de.voronin@mail.ru',
          img: '',
        },
      ],
    },
  ];
  public employees: EmployeeDto[] = [
    {
      id: 9,
      name: 'Воронин Дмитрий',
      mail: 'de.voronin@mail.ru',
      img: '',
    },
    {
      id: 10,
      name: 'Сергей Исхаков',
      mail: 'se.isxakov@mail.ru',
      img: '',
    },
  ];
  public selectedEmployees: EmployeeItemEntity[] = [];
  public selectedDepartments: DepartmentEntity[] = [];

  public ConvertToDepartmentEntityList(
    departments: DepartmentDto[]
  ): DepartmentEntity[] {
    let departmentsEntitys: DepartmentEntity[] = [];
    departments.forEach((element) => {
      departmentsEntitys.push({
        id: element.id,
        name: element.name,
        isSelect: false,
        visibleContent: false,
        supervisor: element.supervisor,
        departments: this.ConvertToDepartmentEntityList(element.departments),
        employees: this.ConvertToEmployeeItemEntityList(element.employees),
      });
    });
    return departmentsEntitys;
  }

  public ConvertToDepartmentEntity(
    department: DepartmentDto
  ): DepartmentEntity {
    return {
      id: department.id,
      name: department.name,
      isSelect: false,
      visibleContent: false,
      supervisor: department.supervisor,
      departments: this.ConvertToDepartmentEntityList(department.departments),
      employees: this.ConvertToEmployeeItemEntityList(department.employees),
    };
  }

  public ConvertToEmployeeItemEntityList(
    employeeDtos: EmployeeDto[]
  ): EmployeeItemEntity[] {
    let result: EmployeeItemEntity[] = [];

    employeeDtos.forEach((element) => {
      result.push(this.ConvertToEmployeeItemEntity(element));
    });
    return result;
  }

  public ConvertToEmployeeItemEntity(
    employee: EmployeeDto
  ): EmployeeItemEntity {
    return {
      id: employee.id,
      img: employee.img,
      name: employee.name,
      isSelect: false,
      mail: employee.mail,
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
