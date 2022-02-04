import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greetingList = [
    { priority: 1, title: "Hi" },
    { priority: 1, title: "Welcome" },
  ]

  onAddGreeting(greeting: { priority: number, title: string }) {
    this.greetingList.push(greeting);
  }

  onSayGreeting(greeting: { priority: number, title: string }) {
    console.log('onSayGreeting', greeting);
  }
}
