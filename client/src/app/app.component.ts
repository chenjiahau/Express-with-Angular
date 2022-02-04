import { Component, OnInit } from '@angular/core';
import { GreetingService } from 'src/services/greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GreetingService]
})
export class AppComponent implements OnInit {
  greetingList = [];

  constructor(private greetingService: GreetingService) {
  }

  ngOnInit(): void {
    this.greetingList = this.greetingService.list;
  }

  onAddGreeting(greeting: { priority: number, title: string }) {
    this.greetingList.push(greeting);
  }

  onSayGreeting(greeting: { priority: number, title: string }) {
    console.log('onSayGreeting', greeting);
  }
}
