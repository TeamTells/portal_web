import { Injectable } from "@angular/core";
import { DepartmentEntity } from "../components/department/department.component";
import { EmployeeEntity } from "../components/employee-item/employee-item.component";

@Injectable
({
  providedIn: 'root'
})

export class EmployeesDataService {
    public departments: DepartmentEntity[] = 
    [
        {
          id: -1,
          name: "Головной офис Йошкар-Ола",
          supervisor: {
                id: 1,
                name: "Сергей Исхаков",
                mail: "se.isxakov@mail.ru",
                img: ""
              },
          departments: [ 
            {
              id: -1,
              name: "Охрана",
              supervisor: {
                id: 2,
                name: "Сергей Исхаков",
                mail: "se.isxakov@mail.ru",
                img: ""
              },
              departments: [],
              employees: [
                {
                  id: 3,
                  name: "Сергей Исхаков",
                  mail: "se.isxakov@mail.ru",
                  img: ""
                }
              ]
            }
          ],
          employees: [
            {
              id: 4,
              name: "Воронин Дмитрий",
              mail: "de.voronin@mail.ru",
              img: ""
            }
          ]
        },
        {
          id: -1,
          name: "Головной офис Йошкар-Ола",
          supervisor: {
                id: 5,
                name: "Сергей Исхаков",
                mail: "se.isxakov@mail.ru",
                img: ""
              },
          departments: [ 
            {
              id: -1,
              name: "Охрана",
              supervisor: {
                id: 6,
                name: "Сергей Исхаков",
                mail: "se.isxakov@mail.ru",
                img: ""
              },
              departments: [],
              employees: [
                {
                  id: 7,
                  name: "Сергей Исхаков",
                  mail: "se.isxakov@mail.ru",
                  img: ""
                }
              ]
            }
          ],
          employees: [
            {
              id: 8,
              name: "Воронин Дмитрий",
              mail: "de.voronin@mail.ru",
              img: ""
            }
          ]
        }
      ]
    public employees: EmployeeEntity[] = 
    [
        {
          id: 9,
          name: "Воронин Дмитрий",
          mail: "de.voronin@mail.ru",
          img: ""
        },
        {
          id: 10,
          name: "Сергей Исхаков",
          mail: "se.isxakov@mail.ru",
          img: ""
        }
    ]
    public selectedEmployees: EmployeeEntity[] = []
    public selectedDepartments: DepartmentEntity[] = []
}