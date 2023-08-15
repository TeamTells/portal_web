import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MainState {
  readonly selectedItem: NavItem = NavItem.NEWS
}

export enum NavItem {
  NEWS,
  EMPLOYEES,
  SETTINGS
}
