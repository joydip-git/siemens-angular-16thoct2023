import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: "[passwordStrength]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordValidatorDirective,
        multi: true
    }]
})
export class PasswordValidatorDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const value = control.value

        if (value && value !== '') {

            let lengthCheck = false
            if (value.length >= 6 && value.length <= 10) {
                lengthCheck = true
            }
            if (!lengthCheck) {
                return {
                    "password": `Length is ${value.length}, where as min length should be:6 and maximum length should be: 10`
                }
            }

            let isUpperPresent = false
            for (const subString of value) {
                if (subString >= 'A' && subString <= 'Z') {
                    isUpperPresent = true
                    break
                }
            }

            if (!isUpperPresent) {
                return {
                    "password": "at least one uppercase should be present"
                }
            }

            let isLowerPresent = false
            for (const subString of value) {
                if (subString >= 'a' && subString <= 'z') {
                    isLowerPresent = true
                    break
                }
            }

            if (!isLowerPresent) {
                return {
                    "password": "at least one lowercase should be present"
                }
            }

            let isDigitPresent = false
            for (const subString of value) {
                if (subString >= '0' && subString <= '9') {
                    isDigitPresent = true
                    break
                }
            }

            if (!isDigitPresent) {
                return {
                    "password": "at least one digit should be present"
                }
            }

            return null

        } else
            return {
                "password": "enter password please..."
            }
    }
    // registerOnValidatorChange?(fn: () => void): void {

    // }

}