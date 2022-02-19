import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questionnaireForm: FormGroup;
  genderList: string[];
  ageList: string[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.genderList = ["Male", "Female"];
    this.ageList = ["Child", "Teenager", "Young", "Old"];

    this.questionnaireForm = new FormGroup({
      'email': new FormControl(
        null,
        [
          Validators.email,
          Validators.required,
          this.checkEmail.bind(this)
        ]
      ),
      'username': new FormGroup({
        'firstname': new FormControl(
          null,
          [
            Validators.minLength(1),
            Validators.maxLength(10),
            Validators.required
          ],
          this.checkUsername.bind(this)
        ),
        'lastname': new FormControl(
          null,
          [
            Validators.minLength(1),
            Validators.maxLength(10),
            Validators.required
          ],
          this.checkUsername.bind(this)
        ),
      }),
      'gender': new FormControl(this.genderList[0]),
      'age': new FormControl(this.ageList[1]),
      'aboutyou': new FormControl(null)
    });
  }

  checkEmail(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.indexOf('gmail') > -1) {
      return { 'invalidEmail': true };
    }

    return null
  }

  checkUsername(control: FormControl): Observable<any> {
    return this.http.get('/api/blockuser')
      .pipe(map((value: any) => {
        let isValid = true
        value.list.map((user: string) => {
          control.value.indexOf(user) > -1 && (isValid = false);
        })

        if (isValid)
          return null;
        else
          return {invalidUsername: true}
      }));
  }

  onSubmit() {
    console.log(this.questionnaireForm);
    this.questionnaireForm.reset();
  }
}
