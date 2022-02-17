import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
      'email': new FormControl(null),
      'firstname': new FormControl(null),
      'lastname': new FormControl(null),
      'gender': new FormControl(this.genderList[0]),
      'age': new FormControl(this.ageList[1]),
      'aboutyou': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.questionnaireForm);
  }
}
