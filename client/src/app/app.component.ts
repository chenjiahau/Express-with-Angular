import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { query } from '@angular/animations';

interface IPost {
  email: string;
  firstname: string;
  lastname: string;
  gender: string;
  age: string;
  aboutyou: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  postList: IPost[];
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

    let queryString = new HttpParams().set('action', 'get');
    queryString = queryString.append('time', '1')

    this.http.get<{ list: IPost[] }>(
      '/api/questionnaire',
      {
        headers: new HttpHeaders({
          'Custom-Header': 'Test'
        }),
        responseType: 'json',
        params: queryString
      }
    )
      .pipe(
        map(res => {
          res.list.map(post => {
            console.log(post);
          })
        })
      )
      .subscribe(res => {
      })
  }

  checkEmail(control: FormControl): { [s: string]: boolean } {
    if (control.value && control.value.indexOf('hotmail') > -1) {
      return { 'invalidEmail': true };
    }

    return null
  }

  checkUsername(control: FormControl): Observable<any> {
    return this.http.get<{ list: string[] }>('/api/blockuser')
      .pipe(map((value) => {
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
    this.successMessage = "";
    this.errorMessage = "";

    const postData = {
      email: this.questionnaireForm.value.email,
      firstname: this.questionnaireForm.value.firstname,
      lastname: this.questionnaireForm.value.lastname,
      gender: this.questionnaireForm.value.gender,
      age: this.questionnaireForm.value.age,
      aboutyou: this.questionnaireForm.value.aboutyou
    }

    let queryString = new HttpParams().set('action', 'post');
    queryString = queryString.append('time', '2')

    this.http.post<{ message: string }>(
      '/api/questionnaire',
      postData,
      {
        headers: new HttpHeaders({
          'Custom-Header': 'Test'
        }),
        params: queryString
      }
    )
      .subscribe(
        (res) => {
          this.successMessage = res.message;
          this.questionnaireForm.reset();
        },
        (err: any) => {
          this.errorMessage = err.error.message;
        }
      )
  }
}
