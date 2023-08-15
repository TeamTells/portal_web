import {NavItem} from "./main-state";

export type MainAction = ChangeItemAction
export enum MainActionTypes {
  SELECT_ITEM,
}

export interface ChangeItemAction {
  readonly type: MainActionTypes.SELECT_ITEM
  readonly item: NavItem
}
