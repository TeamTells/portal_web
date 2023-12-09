export interface EmployeeSelectSettings {
    toolsVisible: boolean,
    blueBoxVisible: boolean,
    countType: CountType,
    clickType: ClickType
  }
  
  export enum CountType { Single, Multiple }
  export enum ClickType { Clicked, CtrlClicked }