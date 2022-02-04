import { EventEmitter, Injectable } from '@angular/core';
import { logService } from './log.service';

@Injectable()
export class GreetingService {
  addResult = new EventEmitter<boolean>();
  list = [
    { priority: 1, title: "Hi" },
    { priority: 1, title: "Welcome" }
  ];

  constructor(private logService: logService) { }

  addGreeting(priority: number, title: string) {
    const greeting = {
      priority,
      title
    };

    this.logService.addLog(priority, title);
    this.list.push(greeting)
    this.addResult.emit(true);
  }
}