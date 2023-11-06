import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MainState {
  readonly selectedItem: NavItem = NavItem.SECTIONS
}

export enum NavItem {
  SECTIONS,
  EMPLOYEES,
  SETTINGS
}
