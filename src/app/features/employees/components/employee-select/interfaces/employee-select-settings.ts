export interface EmployeeSelectSettings {
    toolsVisible: boolean,
    blueBoxVisible: boolean,
    countType: CountType,
    clickType: ClickType,
    overflowScroll: boolean
  }
  
  export enum CountType { Single, Multiple }
  export enum ClickType { Clicked, CtrlClicked }