import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questionnaireForm: FormGroup;
  genderList: string[];
  ageList: string[];

  ngOnInit() {
    this.genderList = ["Male", "Female"];
    this.ageList = ["Child", "Teenager", "Young", "Old"];

    this.questionnaireForm = new FormGroup({
      'email': new FormControl(
        null,
        [
          Validators.email,
          Validators.required
        ]
      ),
      'firstname': new FormControl(
        null,
        [
          Validators.minLength(1),
          Validators.maxLength(10),
          Validators.required
        ]
      ),
      'lastname': new FormControl(
        null,
        [
          Validators.minLength(1),
          Validators.maxLength(10),
          Validators.required
        ]
      ),
      'gender': new FormControl(this.genderList[0]),
      'age': new FormControl(this.ageList[1]),
      'aboutyou': new FormControl(
        null,
        [
          Validators.minLength(1),
          Validators.required
        ]
      )
    });
  }

  onSubmit() {
    console.log(this.questionnaireForm);
  }
}
