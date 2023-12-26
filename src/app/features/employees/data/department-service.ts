import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DepartmentItemDto } from "./dto/department-item-dto";
import { DepartmentFullDto } from "./dto/department-full-dto";
import { DepartmentEditDto } from "./dto/department-edit-dto";
import { AllDepartmentsDto } from "./dto/all-departments-dto";

@Injectable()
export class DepartmentService {
    private readonly apiUrl: string = `${environment.apiUrl}/department`;

    constructor(private httpClient: HttpClient) {
    }

    public getDepartments() : Observable<AllDepartmentsDto>
    {
        return this.httpClient.get<AllDepartmentsDto>(`${this.apiUrl}/all`);
    }

    public getDepartment(id: number): Observable<DepartmentFullDto>
    {
        return this.httpClient.get<DepartmentFullDto>(`${this.apiUrl}/${id}`);
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