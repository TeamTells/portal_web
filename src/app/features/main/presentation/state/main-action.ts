import {NavItem} from "./main-state";

export type MainAction = ChangeItemAction | LogoutAction
export enum MainActionTypes {
  SELECT_ITEM,
  LOGOUT,
}

export interface ChangeItemAction {
  readonly type: MainActionTypes.SELECT_ITEM
  readonly item: NavItem
}

export interface LogoutAction {
  readonly type: MainActionTypes.LOGOUT
}
