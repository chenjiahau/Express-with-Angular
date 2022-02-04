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

  constructor(private greetingService: GreetingService) { }

  ngOnInit(): void {
  }

  onAddGreeing(priorityInput, titleInput) {
    this.greetingService.addGreeting(priorityInput.value, titleInput.value);
  }
}
