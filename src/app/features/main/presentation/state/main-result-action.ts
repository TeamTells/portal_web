import {NavItem} from "./main-state";

export type MainResultAction = ChangeItemResultAction
export enum MainResultActionTypes {
    SELECT_ITEM,
}

export interface ChangeItemResultAction {
    readonly type: MainResultActionTypes.SELECT_ITEM
    readonly item: NavItem
}
