import { Component, OnInit } from '@angular/core';
import { GreetingService } from 'src/services/greeting.service';

@Component({
  selector: 'app-add-greeting',
  templateUrl: './add-greeting.component.html',
  styleUrls: ['./add-greeting.component.css'],
  // Set provider will instance again
  // providers: [GreetingService]
})
export class AddGreetingComponent implements OnInit {
  priority: number;
  title: string;
  state: boolean;
  description: string;

  constructor(private greetingService: GreetingService) { }

  ngOnInit(): void {
    this.priority = 1;
    this.title = 'Hi';
    this.state = false;
    this.description = "";
  }

  changeState(state: boolean) {
    this.state = state;
  }

  onAddGreeing() {
    this.greetingService.addGreeting(this.priority, this.title, this.state, this.description);
  }
}
