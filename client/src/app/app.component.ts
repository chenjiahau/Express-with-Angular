import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  onSayGreeting(greeting: { priority: number, title: string }) {
    console.log('onSayGreeting', greeting);
  }
}
