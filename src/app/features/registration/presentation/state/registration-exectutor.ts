import { Inject, Injectable } from '@angular/core';
import { Executor } from 'src/app/core/mvi/store';
import { RegistrationState } from './registration-state';
import {
  RegistrationAction,
  RegistrationActionTypes,
} from './registration-action';
import {
  RegistrationResultAction,
  RegistrationResultActionTypes,
} from './registration-result-action';
import { Validator } from 'src/app/core/validators/validator';

@Injectable({
  providedIn: 'root',
})
export class RegistrationExecutor extends Executor<
  RegistrationState,
  RegistrationAction,
  RegistrationResultAction
> {
  constructor(
    @Inject('RegistrationEmailValidator') private emailValidator: Validator,
    @Inject('RegistrationNameValidator') private nameValidator: Validator,
    @Inject('RegistrationPhoneNumberValidator')
    private phoneNumberValidator: Validator
  ) {
    super();
  }

  execute(action: RegistrationAction) {
    switch (action.type) {
      case RegistrationActionTypes.CHANGE_NAME:
        this.reduce({
          type: RegistrationResultActionTypes.CHANGE_NAME,
          name: action.name,
        });
        break;

      case RegistrationActionTypes.CHANGE_EMAIL:
        this.reduce({
          type: RegistrationResultActionTypes.CHANGE_EMAIL,
          email: action.email,
        });
        break;

      case RegistrationActionTypes.CHANGE_PHONE_NUMBER:
        this.reduce({
          type: RegistrationResultActionTypes.CHANGE_PHONE_NUMBER,
          phoneNumber: action.phoneNumber,
        });
        break;

      case RegistrationActionTypes.CHANGE_SPECIALIZING:
        this.reduce({
          type: RegistrationResultActionTypes.CHANGE_SPECIALIZING,
          specializing:
            this.getState().specializations.find(
              (s) => s.id === action.specializingId
            ) ?? null,
        });
        break;

      case RegistrationActionTypes.REMOVE_SPECIALIZING:
        this.reduce({
          type: RegistrationResultActionTypes.REMOVE_SPECIALIZING,
        });
        break;

      case RegistrationActionTypes.CHANGE_STAFF_SIZE:
        this.reduce({
          type: RegistrationResultActionTypes.CHANGE_STAFF_SIZE,
          staffSize:
            this.getState().possibleStaffSize.find(
              (s) => s.id === action.staffSizeId
            ) ?? null,
        });
        break;

      case RegistrationActionTypes.REMOVE_STAFF_SIZE:
        this.reduce({
          type: RegistrationResultActionTypes.REMOVE_STAFF_SIZE,
        });
        break;

      case RegistrationActionTypes.CREATE:
        this.handleCreate();
        break;
    }
  }

  private handleCreate() {
    const nameError = this.nameValidator.validate(this.getState().name);
    const phoneNumberError = this.phoneNumberValidator.validate(
      this.getState().phoneNumber
    );
    const emailError = this.emailValidator.validate(this.getState().email);
    const staffSizeError = this.getState().selectedStaffSize
      ? null
      : 'Укажите количество сотрудников в компании';
    const specializingError = this.getState().selectedSpecializing
      ? null
      : 'Укажите в какой отрасли работает ваша компания';

    if (
      specializingError != null ||
      staffSizeError != null ||
      nameError != null ||
      phoneNumberError != null ||
      emailError != null
    ) {
      this.reduce({
        type: RegistrationResultActionTypes.VALIDATION_ERROR,
        emailError: emailError != null ? emailError : '',
        phoneNumberError: phoneNumberError != null ? phoneNumberError : '',
        nameError: nameError != null ? nameError : '',
        staffSizeError: staffSizeError != null ? staffSizeError : '',
        specializingError: specializingError != null ? specializingError : '',
      });
      return;
    }

    this.reduce({
      type: RegistrationResultActionTypes.CHANGE_STATUS_STATE,
      status: 'pending',
    });

    setTimeout(() => {
      this.reduce({
        type: RegistrationResultActionTypes.CHANGE_STATUS_STATE,
        status: 'success',
      });
    }, 3000);
  }
}
