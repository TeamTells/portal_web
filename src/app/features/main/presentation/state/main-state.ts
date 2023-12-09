import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MainState {
  readonly selectedItem: NavItem = NavItem.EDITOR
  showSideBar: boolean = false;
}

export enum NavItem {
  SECTIONS,
  EMPLOYEES,
  SETTINGS,
  PROFILE,
  EDITOR,
}


