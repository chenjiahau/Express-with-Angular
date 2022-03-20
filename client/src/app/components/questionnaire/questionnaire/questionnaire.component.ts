import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ListService } from '../../../services/list.service';
import { ListGuardService } from '../../../modules/list/components/services/list-guard.service';
import { GlobalValidator } from '../../../validators/global.validator';
import { AllowEmailValidator } from '../../../validators/allow-email.validator';
import { ForbiddenWordValidator } from '../../../validators/forbidden-word.validator';

import * as fromApp from '../../../store/reducers/App.reducer';
import * as QuestionnaireActions from '../../../store/actions/Questionnaire.action';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  providers: [ListService]
})
export class QuestionnaireComponent implements OnInit {
  successMessage: string;
  errorMessage: string;
  questionnaireForm: FormGroup;
  genderList: string[];
  ageList: string[];
  tip: { show: boolean; title: string; content: string; }

  constructor(
    private router: Router,
    private listService: ListService,
    private listGuardService: ListGuardService,
    private globalValidator: GlobalValidator,
    private allowEmailValidator: AllowEmailValidator,
    private forbiddenWordsValidator: ForbiddenWordValidator,
    private store: Store<fromApp.AppState>
  ) {}

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

    this.tip = {
      show: false,
      title: null,
      content: null
    }

    this.store.select('questionnaire')
      .subscribe(
        (subscriber) => {
          this.listGuardService.hasJoined.next(subscriber.hasJoined);
        }
      )
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

  showPopup(where: string) {
    setTimeout(() => {
      this.tip.show = true;

      if (where === 'email') {
        this.tip.title = 'About Email';
        this.tip.content = 'Forbid ISP from Gmail';
      }

      if (where === 'username') {
        this.tip.title = 'About Usernmae';
        this.tip.content = 'Username cannot be equal with lastname';
      }
    }, 100);
  }

  closePopup(where: string) {
    this.tip.show = false;
  }

  onSubmit() {
    this.successMessage = "";
    this.errorMessage = "";

    const questionnaire = {
      id: null,
      email: this.questionnaireForm.value.email,
      firstname: this.questionnaireForm.value.username.firstname,
      lastname: this.questionnaireForm.value.username.lastname,
      gender: this.questionnaireForm.value.gender,
      age: this.questionnaireForm.value.age,
      aboutyou: this.questionnaireForm.value.aboutyou
    }

    this.listService.add(questionnaire)
      .subscribe(
        (res) => {
          this.store.dispatch(new QuestionnaireActions.AddQuestionnaire(questionnaire));
          this.store.dispatch(new QuestionnaireActions.SetHasJoined(true));

          this.successMessage = res.message;
          this.questionnaireForm.reset();
          this.questionnaireForm.patchValue({
            gender: this.genderList[0],
            age: this.ageList[1],
          });

          this.router.navigate(['/success']);
        },
        (err: any) => {
          this.errorMessage = err.error.message;
        }
      )
  }
}
