import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null; // Don't validate if no value is present
    }

    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasMinLength = value.length >= 8; 

    const passwordValid = hasUppercase && hasLowercase && hasNumber && hasSpecialChar && hasMinLength;

    return { hasUppercase : hasUppercase, 
                                    hasLowercase : hasLowercase, 
                                    hasNumber : hasNumber, 
                                    hasSpecialChar : hasSpecialChar, 
                                    hasMinLength : hasMinLength, 
                                    passwordStrengthNotMet: passwordValid};
  };
}