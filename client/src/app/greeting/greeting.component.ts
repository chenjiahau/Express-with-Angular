import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  @Input('greetingItem') greeting: { priority: number, title: string };
  @Output() sayGreeting = new EventEmitter<{ priority: number, title: string }>();

  constructor() { }

  ngOnInit(): void {
  }

  onSayGreeting() {
    this.sayGreeting.emit(this.greeting);
  }
}
