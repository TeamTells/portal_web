import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AllEmployeesDto } from "./dto/all-employees-dto";
import { EmployeeInfoDto } from "./dto/employee-info";
import { EmployeeEditDto } from "./dto/employee-edit-dto";
import { MoveEmployeesDto } from "./dto/move-employees-dto";

@Injectable()
export class EmployeeService {
    private readonly apiUrl: string = `${environment.apiUrl}/employee`;

    constructor(private httpClient: HttpClient) {
    }

    public getEmployees() : Observable<AllEmployeesDto>
    {
        return this.httpClient.get<AllEmployeesDto>(`${this.apiUrl}/all`);
    }

    public getEmployee(id: number) : Observable<EmployeeInfoDto[]>
    {
        return this.httpClient.get<EmployeeInfoDto[]>(`${this.apiUrl}/${id}`);
    }

    public createEmployee(employee: EmployeeEditDto): Observable<null>
    {
        return this.httpClient.post<null>(`${this.apiUrl}/create`, employee);
    }

    public editEmployee(id: number, employee: EmployeeEditDto): Observable<null>
    {
        return this.httpClient.post<null>(`${this.apiUrl}/${id}/edit`, employee);
    }

    public deleteEmployee(id: number): Observable<null>
    {
        return this.httpClient.delete<null>(`${this.apiUrl}/${id}/delete`);
    }

    public employeeMoveToDepartment(moveDto: MoveEmployeesDto): Observable<null>
    {
        return this.httpClient.post<null>(`${this.apiUrl}/moveToDepartment`, moveDto);
    }
}