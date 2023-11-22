export type EmployeeEditAction =
  | ChangeFirstNameAction
  | ChangeLastNameAction
  | ChangePatronymicAction
  | ChangeDateOfBirthAction
  | ChangeEmailAction
  | ChangePasswordAction
  | ChangeDepartmentAction
  | AddRoleAction
  | RemoveRoleAction
  | EditAction;

export enum EmployeeEditActionTypes {
  CHANGE_FIRST_NAME,
  CHANGE_LAST_NAME,
  CHANGE_PATRONYMIC,
  CHANGE_DATE_OF_BIRTH,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  SELECT_DEPARTMENT,
  ADD_ROLE,
  REMOVE_ROLE,
  SELECT_RIGHT,
  EDIT,
}

export interface ChangeFirstNameAction {
  readonly type: EmployeeEditActionTypes.CHANGE_FIRST_NAME;
  readonly firstName: string;
}

export interface ChangeLastNameAction {
  readonly type: EmployeeEditActionTypes.CHANGE_LAST_NAME;
  readonly lastName: string;
}

export interface ChangePatronymicAction {
  readonly type: EmployeeEditActionTypes.CHANGE_PATRONYMIC;
  readonly patronymic: string;
}

export interface ChangeDateOfBirthAction {
  readonly type: EmployeeEditActionTypes.CHANGE_DATE_OF_BIRTH;
  readonly dateOfBirth: string;
}

export interface ChangeEmailAction {
  readonly type: EmployeeEditActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangePasswordAction {
  readonly type: EmployeeEditActionTypes.CHANGE_PASSWORD;
  readonly password: string;
}

export interface ChangeDepartmentAction {
  readonly type: EmployeeEditActionTypes.SELECT_DEPARTMENT;
  readonly departmentId: string;
}

export interface AddRoleAction {
  readonly type: EmployeeEditActionTypes.ADD_ROLE;
  readonly roleId: string;
}

export interface RemoveRoleAction {
  readonly type: EmployeeEditActionTypes.REMOVE_ROLE;
  readonly roleId: string;
}

export interface EditAction {
  readonly type: EmployeeEditActionTypes.EDIT;
}
