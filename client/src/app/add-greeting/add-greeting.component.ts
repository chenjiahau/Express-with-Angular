import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-greeting',
  templateUrl: './add-greeting.component.html',
  styleUrls: ['./add-greeting.component.css']
})
export class AddGreetingComponent implements OnInit {
  @Output() addGreeting = new EventEmitter<{ priority: number, title: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddGreeing(priorityInput, titleInput) {
    this.addGreeting.emit({priority: parseInt(priorityInput.value), title: titleInput.value});
  }
}
