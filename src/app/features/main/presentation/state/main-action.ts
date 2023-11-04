import {NavItem} from "./main-state";

export type MainAction = ChangeItemAction | LogoutAction | SideBarAction
export enum MainActionTypes {
  SELECT_ITEM,
  LOGOUT,
  SHOW_SIDEBAR,
}

export interface ChangeItemAction {
  readonly type: MainActionTypes.SELECT_ITEM
  readonly item: NavItem
}

export interface LogoutAction {
  readonly type: MainActionTypes.LOGOUT
}

export interface SideBarAction {
  readonly type: MainActionTypes.SHOW_SIDEBAR
}