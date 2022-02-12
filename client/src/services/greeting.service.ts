import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { LogService } from './log.service';
import { Greeting, IGreeting } from '../models/greeting';

@Injectable()
export class GreetingService {
  addResult = new Subject<boolean>();
  // addResult = new EventEmitter<boolean>();
  _list = [
    {
      id: 1,
      priority: 1,
      title: 'Hi',
      state: true,
      description: '',
      createdDate: new Date()
    },
    {
      id: 2,
      priority: 2,
      title: 'Welcome',
      state: false,
      description: '',
      createdDate: new Date()
    }
  ];

  constructor(private logService: LogService) { }

  get list() {
    return this._list; 
  }

  addGreeting(priority: number, title: string, state: boolean, description: string) {
    if (this._list.length === 10) {
      this.addResult.next(false);
      return;
    }

    const id: number = this.list.length + 1;
    const greeting: IGreeting = new Greeting({
      id,
      priority,
      title,
      state,
      description,
      createdDate: new Date()
    });

    this.logService.addLog(greeting);
    this._list.push(greeting);
    
    this.addResult.next(true);
  }
}