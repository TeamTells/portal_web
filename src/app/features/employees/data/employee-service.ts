import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AllEmployeesDto } from "./dto/all-employees-dto";
import { EmployeeInfoDto } from "./dto/employee-info";
import { EmployeeEditDto } from "./dto/employee-edit-dto";
import { MoveEmployeesDto } from "./dto/move-employees-dto";
import { EmployeeFullDto } from "./dto/employee-full-dto";
import { DeleteEmployeeDto } from "./dto/delete-employees-dto";

@Injectable()
export class EmployeeService {
    private readonly apiUrl: string = `${environment.apiUrl}/employee`;

    constructor(private httpClient: HttpClient) {
    }

    public getEmployees() : Observable<AllEmployeesDto>
    {
        return this.httpClient.get<AllEmployeesDto>(`${this.apiUrl}/all`);
    }

    public getEmployee(id: number) : Observable<EmployeeInfoDto>
    {
        return this.httpClient.get<EmployeeInfoDto>(`${this.apiUrl}/${id}`);
    }

    public getEmployeesByIDs(ids: number[]) : Observable<EmployeeFullDto[]>
    {
        return this.httpClient.post<EmployeeFullDto[]>(`${this.apiUrl}/list`, ids);
    }

    public createEmployee(employee: EmployeeEditDto): Observable<null>
    {
        return this.httpClient.post<null>(`${this.apiUrl}/create`, employee);
    }

    public editEmployee(id: number, employee: EmployeeEditDto): Observable<null>
    {
        return this.httpClient.post<null>(`${this.apiUrl}/${id}/edit`, employee);
    }

    public deleteEmployees(deleteElements: DeleteEmployeeDto[]): Observable<null>
    {
        return this.httpClient.delete<null>(`${this.apiUrl}/delete`, {body: deleteElements});
    }

    public employeeMoveToDepartment(moveDto: MoveEmployeesDto): Observable<null>
    {
        return this.httpClient.post<null>(`${this.apiUrl}/moveToDepartment`, moveDto);
    }
}