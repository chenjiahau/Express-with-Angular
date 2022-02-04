import { EventEmitter } from '@angular/core';

export class GreetingService {
  addResult = new EventEmitter<boolean>();
  list = [
    { priority: 1, title: "Hi" },
    { priority: 1, title: "Welcome" }
  ];

  constructor() { }

  ngOnInit(): void {

  }
  
  addGreeting(priority: number, title: string) {
    this.list.push(
      {
        priority,
        title
      }
    )
    this.addResult.emit(true);
  }
}