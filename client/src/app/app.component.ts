import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { IPost, ListService } from './services/list.service';
import { GlobalValidator } from './validators/global.validator';
import { AllowEmailValidator } from './validators/allow-email.validator';
import { ForbiddenWordValidator } from './validators/forbidden-word.validator';

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

  constructor(
    private listService: ListService,
    private globalValidator: GlobalValidator,
    private allowEmailValidator: AllowEmailValidator,
    private forbiddenWordsValidator: ForbiddenWordValidator
  ) { }

  ngOnInit() {
    this.genderList = ["Male", "Female"];
    this.ageList = ["Child", "Teenager", "Young", "Old"];

    this.questionnaireForm = new FormGroup(
      {
        'email': new FormControl(
          null,
          {
            validators: [
              Validators.email,
              Validators.required,
              this.allowEmailValidator.validate
            ],
            asyncValidators: null,
            updateOn: 'blur'
          }
        ),
        'username': new FormGroup({
          'firstname': new FormControl(
            null,
            {
              validators: [
                Validators.minLength(1),
                Validators.maxLength(10),
                Validators.pattern('^[a-zA-Z]*$'),
                Validators.required
              ],
              asyncValidators: this.forbiddenWordsValidator.validate,
              updateOn: 'blur'
            }
          ),
          'lastname': new FormControl(
            null,
            {
              validators: [
                Validators.minLength(1),
                Validators.maxLength(10),
                Validators.pattern('^[a-zA-Z]*$'),
                Validators.required
              ],
              asyncValidators: this.forbiddenWordsValidator.validate,
              updateOn: 'blur'
            }
          )
        }),
        'gender': new FormControl(this.genderList[0]),
        'age': new FormControl(this.ageList[1]),
        'aboutyou': new FormControl(null)
      },
      {
        validators: [ this.globalValidator.validate ]
      }
    );

    this.listService.fetch()
      .pipe(
        map(res => {
          res.list.map(post => {
            // console.log(post);
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
