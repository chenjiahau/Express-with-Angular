import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

import { Greeting, IGreeting } from '../models/greeting';
import { NoSubstitutionTemplateLiteral } from 'typescript';

@Injectable()
export class GreetingService {
  addResult = new EventEmitter<boolean>();
  _list = [
    {
      id: 1,
      priority: 1,
      title: 'Hi',
      state: true,
      description: ''
    },
    {
      id: 2,
      priority: 2,
      title: 'Welcome',
      state: true,
      description: ''
    }
  ];

  constructor(private logService: LogService) { }

  get list() {
    return this._list; 
  }

  addGreeting(priority: number, title: string, state: boolean, description: string) {
    const id: number = this.list.length + 1;
    const greeting: IGreeting = new Greeting({
      id,
      priority,
      title,
      state,
      description
    });

    this.logService.addLog(greeting);
    this._list.push(greeting)
    this.addResult.emit(true);
  }
}