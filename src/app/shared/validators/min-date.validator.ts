import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minDateValidator(min: string) {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value) {
            return null;
        }

        const minDate = new Date(min);
        const inputDate = new Date(value);

        return inputDate < minDate ? { minDate : { requiredDate: min } } : null;
    };
}