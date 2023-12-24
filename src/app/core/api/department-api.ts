import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { DepartmentItemDto } from "../dto/department-item-dto";
import { DepartmentFullDto } from "../dto/department-full-dto";
import { DepartmentEditDto } from "../dto/department-edit-dto";

@Injectable()
export class EmployeeApi {
    //api в корне в proxy.conf.json
    private readonly apiUrl: string = '/api/department';

    constructor(private httpClient: HttpClient) {
    }

    public getDepartments() : Observable<DepartmentItemDto[]>
    {
        return this.httpClient.get<DepartmentItemDto[]>(`${this.apiUrl}/all`);
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