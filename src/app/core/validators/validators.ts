import {Validator} from "./validator";
import {EmailRule, EmptyRule} from "./rule";

export let emailValidatorFactory = () => new Validator([
    new EmptyRule("Поле E-mail не должно быть пустым"),
    new EmailRule("Введите валидный E-mail")
])
