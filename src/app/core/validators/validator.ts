import {EmptyRule, Rule} from "./rule";
import {rule} from "postcss";

export class Validator {

    constructor(private rules: Rule[]) {

    }

    validate(value: String): string | null {
        let error = null
        console.log(value)

        for (let rule of this.rules) {
            if (!rule.check(value)) {
                error = rule.error;
                break
            }
        }
        return error
    }

}
