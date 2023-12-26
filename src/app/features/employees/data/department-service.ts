import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DepartmentEditDto } from "./dto/department-edit-dto";
import { AllDepartmentsDto } from "./dto/all-departments-dto";
import { DepartmentInfoDto } from "./dto/department-info";

@Injectable()
export class DepartmentService {
    private readonly apiUrl: string = `${environment.apiUrl}/department`;

    constructor(private httpClient: HttpClient) {
    }

    public getDepartments() : Observable<AllDepartmentsDto>
    {
        return this.httpClient.get<AllDepartmentsDto>(`${this.apiUrl}/all`);
    }

    public getDepartment(id: number): Observable<DepartmentInfoDto>
    {
        return this.httpClient.get<DepartmentInfoDto>(`${this.apiUrl}/${id}`);
    }

    public createDepartment(department: DepartmentEditDto): Observable<null>
    {
        return this.httpClient.post<null>(`${this.apiUrl}/create`, department);
    }

    public editDepartment(id: number, department: DepartmentEditDto): Observable<null>
    {
        return this.httpClient.post<null>(`${this.apiUrl}/${id}/edit`, department);
    }

    public deleteDepartment(id: number): Observable<null>
    {
        return this.httpClient.delete<null>(`${this.apiUrl}/${id}/delete`);
    }
}