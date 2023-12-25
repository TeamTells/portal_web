import { Executor } from "src/app/core/mvi/store";
import { EmployeeSelectState } from "./employee-select-state";
import { EmployeeSelectAction, EmployeeSelectActionTypes } from "./employee-select-action";
import { EmployeeSelectResultAction, EmployeeSelectResultActionTypes } from "./employee-select-result-action";
import { Injectable } from "@angular/core";
import { EmployeeItemEntity } from "../../employee-item/employee-item.component";
import { DepartmentEntity } from "../../department/department.component";
import { elementAt } from "rxjs";
import { EmployeesNavItem, EmployeesNavigator } from "../../../navigation/employees-navigator";
import { NavItem } from "src/app/features/main/presentation/state/main-state";
import { CountType } from "../interfaces/employee-select-settings";
import { SearchEmployeeDepartmentData } from "../interfaces/search-employee-department-data";

@Injectable({
  providedIn: 'root'
})
export class EmployeeSelectExecutor extends Executor<EmployeeSelectState, EmployeeSelectAction, EmployeeSelectResultAction> {

  constructor(
    private navigator: EmployeesNavigator
  ) {
    super();
  }

  execute(action: EmployeeSelectAction) {
    switch (action.type) {
      case EmployeeSelectActionTypes.INIT_DATA:
        this.reduce({
          type: EmployeeSelectResultActionTypes.INIT_DATA,
          settings: action.settings,
          departments: action.departments,
          employees: action.employees
        })
        break
      case EmployeeSelectActionTypes.SEARCH_FIELD_CHANGE:
        this.handleSearchFieldChange(action.str)
        break
      case EmployeeSelectActionTypes.SELECT_EMPLOYEE:
        this.handleSelectEmployee(action.employee)
        break
      case EmployeeSelectActionTypes.SELECT_DEPARTMENT:
        this.handleSelectDepartment(action.department)
        break
      case EmployeeSelectActionTypes.UNSELECT_ALL:
        this.handleUnselectAll()
        break
      case EmployeeSelectActionTypes.ROUTE_TO_DEPARTMENT:
        this.navigator.showContent({
          navItem: EmployeesNavItem.DEPARTMENT,
          params: action.id.toString(),
          data: {}
        })
        break
      case EmployeeSelectActionTypes.MOVE_TO_DEPARTMENT:
        this.reduce({
          type: EmployeeSelectResultActionTypes.MOVE_TO_DEPARTMENT,
          visible: true
        })
        break
      case EmployeeSelectActionTypes.MOVE_TO_DEPARTMENT_CLOSE:
        this.reduce({
          type: EmployeeSelectResultActionTypes.MOVE_TO_DEPARTMENT,
          visible: false
        })
        break
      case EmployeeSelectActionTypes.NEW_DEPARTMENT:
        this.navigator.showContent({
          navItem: EmployeesNavItem.NEW_DEPARTMENT,
          params: "",
          data: { employeeIDs: this.getSelectedIds() }
        })
        break
      case EmployeeSelectActionTypes.DELETE:

        break
    }
  }

  private getSelectedIds(): number[] {
    let ids: number[] = []
    this.getState().employees.forEach((element) => {
      if (element.isSelect) {
        ids.push(element.id)
      }
    })

    return ids.concat(this.getSelectedInDepartments(this.getState().departments))
  }

  getSelectedInDepartments(departments: DepartmentEntity[]): number[] {
    let result: number[] = []

    departments.forEach((dep) => {
      dep.departments.forEach((element) => {
        result = result.concat(this.getSelectedInDepartments(element.departments))
        element.employees.forEach((empl) => {
          if (empl.isSelect) {
            result.push(empl.id)
          }
        })
      })

      dep.employees.forEach((element) => {
        if (element.isSelect) {
          result.push(element.id)
        }
      })
    })

    return result;
  }
  //#region "handleSearchFieldChange"
  private handleSearchFieldChange(searchStr: string) {
    let resultEmployeeDepartments: SearchEmployeeDepartmentData[] = []

    if (searchStr.length != 0) {
      resultEmployeeDepartments = resultEmployeeDepartments.concat(this.searchEmployeesInDepartments(searchStr, '', this.getState().departments))
      let searchRoot = this.searchInRoot(searchStr)
      if (searchRoot) {
        resultEmployeeDepartments.push(searchRoot)
      }
    }

    this.reduce({
      type: EmployeeSelectResultActionTypes.SEARCH_FIELD_CHANGE,
      str: searchStr,
      searchDepartments: resultEmployeeDepartments
    })
  }

  private searchInRoot(searchStr: string): SearchEmployeeDepartmentData | undefined {
    let searchRoot: SearchEmployeeDepartmentData = {
      deprtmentsStr: "Корень всей организации",
      employees: [],
      searchStr: searchStr
    }

    this.getState().employees.forEach((empl) => {
      if (empl.name.includes(searchStr)) {
        searchRoot.employees.push(empl)
      }
    })

    if (searchRoot.employees.length != 0) {
      return searchRoot
    }
    return undefined
  }

  private searchEmployeesInDepartments(searchStr: string, curentDepartmentsString: string, curentDepartments: DepartmentEntity[]): SearchEmployeeDepartmentData[] {
    let findDepartments: SearchEmployeeDepartmentData[] = []

    curentDepartments.forEach((dep) => {
      let searchDep: SearchEmployeeDepartmentData = {
        deprtmentsStr: curentDepartmentsString == '' ? dep.name : curentDepartmentsString + " / " + dep.name,
        employees: [],
        searchStr: searchStr
      }

      findDepartments = findDepartments.concat(this.searchEmployeesInDepartments(searchStr, searchDep.deprtmentsStr, dep.departments))

      dep.employees.forEach((empl) => {
        if (empl.name.includes(searchStr)) {
          searchDep.employees.push(empl)
        }
      })

      if (searchDep.employees.length != 0) {
        findDepartments.push(searchDep)
      }
    })

    return findDepartments
  }
  //#endregion

  //#region "handleSelectEmployee"
  private handleSelectEmployee(employee: EmployeeItemEntity): void {
    let employees = this.getState().employees
    let departments = this.getState().departments
    let selectedCount = this.getSelectedCount(employee)
    let findEmployee = employees.find((element) => { return element.id == employee.id })

    if (findEmployee) {
      this.selectEmployee(findEmployee)
    }
    else {
      departments.forEach((element) => { this.findEmployeeInDepartment(element, employee) })
    }

    this.reduce({
      type: EmployeeSelectResultActionTypes.SELECT,
      selectCount: selectedCount,
      visible: selectedCount != 0
    })
  }

  private getSelectedCount(employee: EmployeeItemEntity): number {
    let settings = this.getState().settings
    let result = 0

    if (settings.countType == CountType.Single) {
      result = employee.isSelect ? 0 : 1
    }
    else {
      result = employee.isSelect ? this.getState().selectedCount - 1 : this.getState().selectedCount + 1
    }

    return result
  }

  private findEmployeeInDepartment(department: DepartmentEntity, employee: EmployeeItemEntity): boolean {
    let findFlag = false
    let findEmployee = department.employees.find((element) => { return element.id == employee.id })

    if (findEmployee) {
      this.selectEmployee(findEmployee)
      findFlag = true;
    }
    else {
      department.departments.forEach(element => {
        if (this.findEmployeeInDepartment(element, employee)) {
          findFlag = true
        }
      });
    }

    department.isSelect = findFlag && this.getState().settings.countType != CountType.Single ? this.isAllSelectedDepartment(department) : department.isSelect
    return findFlag;
  }

  private selectEmployee(employee: EmployeeItemEntity): void {
    this.updateSelectInSearchDepartment(employee)
    if (employee.isSelect) {
      employee.isSelect = false
    }
    else {
      if (this.getState().settings.countType == CountType.Single) {
        this.unselectAll()
      }
      employee.isSelect = true
    }
  }

  private updateSelectInSearchDepartment(employee: EmployeeItemEntity) {
    let searchDepartments = this.getState().searchDepartments

    searchDepartments.forEach((dep) => {
      let findEmployee = dep.employees.find((element) => { return element.id == employee.id })
      if (findEmployee) {
        if (findEmployee.isSelect) {
          findEmployee.isSelect = false
        }
        else {
          if (this.getState().settings.countType == CountType.Single) {
            this.unselectAll()
          }
          findEmployee.isSelect = true
        }
      }
    })
  }
  //#endregion

  //#region "handleSelectDepartment"
  private handleSelectDepartment(department: DepartmentEntity): void {
    if (this.getState().settings.countType != CountType.Single) {
      let selectedCount = this.getState().selectedCount
      if (department.isSelect) {
        selectedCount += this.unselectDepartment(department)
      }
      else {
        selectedCount += this.selectDepartment(department)
      }

      if (this.getState().departments.indexOf(department) == -1) {
        this.checkMotherDepartmentsSelect(department, this.getState().departments)
      }

      this.reduce({
        type: EmployeeSelectResultActionTypes.SELECT,
        selectCount: selectedCount,
        visible: selectedCount != 0
      })
    }
  }

  private unselectDepartment(department: DepartmentEntity): number {
    department.isSelect = false
    let count = 0

    department.employees.forEach((element) => {
      if (element.isSelect) {
        count -= 1
        element.isSelect = false
      }
    })

    department.departments.forEach((element) => {
      count += this.unselectDepartment(element)
    })

    return count
  }

  private selectDepartment(department: DepartmentEntity): number {
    department.isSelect = true
    let count = 0

    department.employees.forEach((element) => {
      if (!element.isSelect) {
        element.isSelect = true
        count += 1
      }
    })

    department.departments.forEach((element) => {
      if (!element.isSelect) {
        count += this.selectDepartment(element)
      }
    })

    return count
  }

  private checkMotherDepartmentsSelect(department: DepartmentEntity, departments: DepartmentEntity[]): boolean {
    let isFind = false
    let result = false

    departments.forEach((element) => {
      if (element.departments.indexOf(department) != -1) {
        isFind = true
        result = element.isSelect != this.isAllSelectedDepartment(element)
        element.isSelect = this.isAllSelectedDepartment(element)
      }
    })

    if (!isFind) {
      departments.forEach((element) => {
        if (this.checkMotherDepartmentsSelect(department, element.departments)) {
          result = element.isSelect != this.isAllSelectedDepartment(element)
          element.isSelect = this.isAllSelectedDepartment(element)
        }
      })
    }

    return result;
  }
  //#endregion

  private isAllSelectedDepartment(department: DepartmentEntity): boolean {
    return (!department.employees.find((element) => { return element.isSelect == false })
      && !department.departments.find((element) => { return element.isSelect == false }))
  }

  private handleUnselectAll(): void {
    this.unselectAll();

    this.reduce({
      type: EmployeeSelectResultActionTypes.SELECT,
      selectCount: 0,
      visible: false
    })
  }

  private unselectAll(): void {
    let employees = this.getState().employees
    let departments = this.getState().departments
    let searchDepartments = this.getState().searchDepartments

    searchDepartments.forEach((dep) => {
      dep.employees.forEach((empl) => { empl.isSelect = false })
    })
    departments.forEach((element) => { this.unselectDepartment(element) })
    employees.forEach((element) => { element.isSelect = false })
  }
}
