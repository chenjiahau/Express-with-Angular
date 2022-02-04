import { EventEmitter, Injectable } from '@angular/core';
import { logService } from './log.service';

@Injectable()
export class GreetingService {
  addResult = new EventEmitter<boolean>();
  _list = [
    { priority: 1, title: "Hi" },
    { priority: 1, title: "Welcome" }
  ];

  constructor(private logService: logService) { }

  get list() {
    return this._list; 
  }

  addGreeting(priority: number, title: string) {
    const greeting = {
      priority,
      title
    };

    this.logService.addLog(priority, title);
    this._list.push(greeting)
    this.addResult.emit(true);
  }
}