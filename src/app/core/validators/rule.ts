export abstract class Rule {

    constructor(public error: string) {
    }

    abstract check(value: String): boolean

}

export class EmptyRule extends Rule {

    check(value: String): boolean {
        return value.length != 0;
    }

}

export class MinLengthRule extends Rule {

    constructor(errorPattern: string, private minLength: number) {
        super(errorPattern);
    }

    check(value: String): boolean {
        return value.length >= this.minLength;
    }

}

export class EmailRule extends Rule {

    private pattern =
        "^[а-яА-ЯёЁa-zA-Z0-9._%+-]{0,63}[а-яА-ЯёЁa-zA-Z0-9_%+-]@[а-яА-ЯёЁa-zA-Z0-9.-]{2,}\\.[а-яА-ЯёЁa-zA-Z]{2,}\$"
    check(value: String): boolean {
        return value.match(this.pattern) != null;
    }

}
