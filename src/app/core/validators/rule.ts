export abstract class Rule {
  constructor(public error: string) {}

  abstract check(value: String): boolean;
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

export class MaxLengthRule extends Rule {
  constructor(errorPattern: string, private maxLength: number) {
    super(errorPattern);
  }

  check(value: String): boolean {
    return value.length <= this.maxLength;
  }
}

export class EmailRule extends Rule {
  private pattern =
    '^[а-яА-ЯёЁa-zA-Z0-9._%+-]{0,63}[а-яА-ЯёЁa-zA-Z0-9_%+-]@[а-яА-ЯёЁa-zA-Z0-9.-]{2,}\\.[а-яА-ЯёЁa-zA-Z]{2,}$';

  check(value: String): boolean {
    return value.match(this.pattern) != null;
  }
}

export class DateRule extends Rule {
  private pattern = /^\d{1,2}\.\d{1,2}\.\d{4}$/;

  check(value: String): boolean {
    const strValue = value.toString();
    if (!this.pattern.test(strValue)) return false;

    const parts = value.split('.');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    if (!(day >= 1 && day <= 31 && month >= 1 && month <= 12)) return false;

    const maxYear = new Date().getFullYear();
    if (!(year >= 1900 && year <= maxYear)) return false;

    const date = new Date(year, month, day);
    return (
      day === date.getDate() &&
      month === date.getMonth() &&
      year === date.getFullYear()
    );
  }
}

export class PhoneNumberRule extends Rule {
  constructor(errorPattern: string, private countryCode: string) {
    super(errorPattern);
    this.pattern = `^\\${this.countryCode}\\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$`;
  }

  private pattern: string;

  check(value: string): boolean {
    console.log(value);
    return value.match(this.pattern) !== null;
  }
}
