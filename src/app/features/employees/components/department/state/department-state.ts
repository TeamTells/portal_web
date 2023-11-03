import { Injectable } from "@angular/core";

@Injectable
({
  providedIn: 'root'
})

export class DepartmentState {
  readonly visibilityContent: boolean = false
  readonly countOfEmployees: number = 0
}
