import { Injectable } from "@angular/core";
import { FormControl, Validator } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AllowEmailValidator implements Validator {
  restrictedISPList: string[] = ['gmail', 'hotmail'];

  validate = (formControl: FormControl) => {
    if (formControl.value) {
      for (let restrictedISP of this.restrictedISPList) {
        if (formControl.value.indexOf(restrictedISP) > -1) {
          return { 'invalidEmail': true };
        }
      }

      return null
    }
  }
}
