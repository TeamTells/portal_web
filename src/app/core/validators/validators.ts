import { Validator } from './validator';
import {
    EmailRule,
    EmptyRule,
    MaxLengthRule,
    MinLengthRule,
    PhoneNumberRule,
} from './rule';

export const emailValidatorFactory = () =>
  new Validator([
    new EmptyRule('Поле E-mail не должно быть пустым'),
    new EmailRule('Введите валидный E-mail'),
  ]);

export const passwordValidatorFactory = () =>
  new Validator([
    new EmptyRule('Пароль не может быть пустым'),
    new MinLengthRule('Пароль должен содержать минимум 8 символов', 8),
    new MaxLengthRule('Пароль не может быть длиннее 25 символов', 25),
  ]);

export let phoneNumberValidatorFactory = () =>
  new Validator([
    new PhoneNumberRule(
      `Введите номер телефона в формате +7 (XXX) YYY-YY-YY`,
      '+7'
    ),
  ]);
