import { Injectable } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, Validator } from "@angular/forms";
import { last } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GlobalValidator implements Validator {
  validate(formGroup: FormGroup) {
    const { firstname, lastname } = formGroup.value.username;

    if (formGroup.touched && firstname === lastname) {
      return { 'invalidUsername': true }
    }

    return null;
  }
}
