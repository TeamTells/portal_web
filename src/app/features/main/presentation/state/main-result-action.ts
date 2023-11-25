import {NavItem} from "./main-state";

export type MainResultAction = ChangeItemResultAction | SideBarResultAction
export enum MainResultActionTypes {
    SELECT_ITEM,
    SHOW_SIDEBAR,
}

export interface ChangeItemResultAction {
    readonly type: MainResultActionTypes.SELECT_ITEM
    readonly item: NavItem
}

export interface SideBarResultAction {
    readonly type: MainResultActionTypes.SHOW_SIDEBAR
}