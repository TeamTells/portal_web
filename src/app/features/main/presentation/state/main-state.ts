import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MainState {
  readonly selectedItem: NavItem = NavItem.NEWS
  showSideBar: boolean = false;
}

export enum NavItem {
  NEWS,
  EMPLOYEES,
  SETTINGS
}


