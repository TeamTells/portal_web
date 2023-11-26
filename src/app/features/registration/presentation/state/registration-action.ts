export type RegistrationAction =
  | ChangeEmailAction
  | ChangePhoneNumberAction
  | ChangeNameAction
  | ChangeSpecializingAction
  | RemoveSpecializingAction
  | ChangeStaffSizeAction
  | RemoveStaffSizeAction
  | CreateAction;

export enum RegistrationActionTypes {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_PHONE_NUMBER,
  CHANGE_STAFF_SIZE,
  REMOVE_STAFF_SIZE,
  CHANGE_SPECIALIZING,
  REMOVE_SPECIALIZING,
  CREATE,
}

export interface ChangeNameAction {
  readonly type: RegistrationActionTypes.CHANGE_NAME;
  readonly name: string;
}

export interface ChangeEmailAction {
  readonly type: RegistrationActionTypes.CHANGE_EMAIL;
  readonly email: string;
}

export interface ChangePhoneNumberAction {
  readonly type: RegistrationActionTypes.CHANGE_PHONE_NUMBER;
  readonly phoneNumber: string;
}

export interface ChangeStaffSizeAction {
  readonly type: RegistrationActionTypes.CHANGE_STAFF_SIZE;
  readonly staffSizeId: string;
}

export interface RemoveStaffSizeAction {
  readonly type: RegistrationActionTypes.REMOVE_STAFF_SIZE;
}

export interface ChangeSpecializingAction {
  readonly type: RegistrationActionTypes.CHANGE_SPECIALIZING;
  readonly specializingId: string;
}

export interface RemoveSpecializingAction {
  readonly type: RegistrationActionTypes.REMOVE_SPECIALIZING;
}

export interface CreateAction {
  readonly type: RegistrationActionTypes.CREATE;
}
