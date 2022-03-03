import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, FormControl, ValidationErrors } from "@angular/forms";
import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ForbiddenWord implements AsyncValidator {
  constructor(private http: HttpClient) { }

  validate = (control: FormControl) => {
    return this.http.get<{ list: string[] }>('/api/blockuser')
      .pipe(
        map((value) => {
          let isValid = true
          value.list.map((user: string) => {
            control.value.indexOf(user) > -1 && (isValid = false);
          })

          if (isValid)
            return null;
          else
            return { invalidUsername: true }
        }),
        catchError((err: any) => {
          return of({ invalidUsername: true });
        })
      );
  }
}
