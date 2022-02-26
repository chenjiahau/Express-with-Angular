import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost, ListService } from './list.service';

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

  constructor(private http: HttpClient, private listService: ListService) {}

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

    this.listService.fetch()
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

  get email() {
    return this.questionnaireForm.get('email')
  }

  get firstname() {
    return this.questionnaireForm.get('username.firstname')
  }

  get lastname() {
    return this.questionnaireForm.get('username.lastname')
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
      firstname: this.questionnaireForm.value.username.firstname,
      lastname: this.questionnaireForm.value.username.lastname,
      gender: this.questionnaireForm.value.gender,
      age: this.questionnaireForm.value.age,
      aboutyou: this.questionnaireForm.value.aboutyou
    }

    this.listService.add(postData)
      .subscribe(
        (res) => {
          this.successMessage = res.message;
          this.questionnaireForm.reset();
          this.questionnaireForm.patchValue({
            gender: this.genderList[0],
            age: this.ageList[1],
          });
        },
        (err: any) => {
          this.errorMessage = err.error.message;
        }
      )
  }
}
