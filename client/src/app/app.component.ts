import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genderList: string[];
  ageList: string[];
  data: {
    email: string;
    firstname: string;
    lastname: string;
    gender: string;
    age: string;
    aboutyou: string;
  }

  ngOnInit() {
    this.genderList = ["Male", "Female"];
    this.ageList = ["Child", "Teenager", "Young", "Old"];

    this.data = {
      email: "my@c.c",
      firstname: "i",
      lastname: "i",
      gender: "Female",
      age: "Teenager",
      aboutyou: "aboutyou"
    }
  }

  onSubmit(questionnarie: NgForm) {
    console.log(questionnarie);
    questionnarie.reset();
  }
}
