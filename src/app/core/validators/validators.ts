import {Validator} from "./validator";
import {EmailRule, EmptyRule, MinLengthRule} from "./rule";

export let emailValidatorFactory = () => new Validator([
    new EmptyRule("Поле E-mail не должно быть пустым"),
    new EmailRule("Введите валидный E-mail")
])

export let passwordValidatorFactory = () => new Validator([
    new EmptyRule("Пароль не может быть пустым"),
    new MinLengthRule("Пароль должен содержать минимум 8 символов", 8),
])
