import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genderList: string[];
  ageList: string[];
  habitList: { title: string; selected: boolean;}[];

  ngOnInit() {
    this.genderList = ["Male", "Female"];
    this.ageList = ["Child", "Teenager", "Young", "Old"];
    this.habitList = [
      { title: "Hiking", selected: false },
      { title: "Sports", selected: false },
      { title: "Sleeping", selected: false },
    ];
  }

  onSubmit(questionnarie: NgForm) {
    console.log(questionnarie);
  }
}
