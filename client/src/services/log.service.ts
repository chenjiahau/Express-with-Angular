import { Injectable } from '@angular/core';
import _ from 'lodash';

import { IGreeting } from '../models/greeting';

@Injectable()
export class LogService {
  private _logList: IGreeting[] = [
    {
      id: 99,
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

  constructor() { }

  ngOnInit(): void {
  }

  getLogList(orderBy?: string) {
    if (!orderBy)
      return this._logList;

    if (orderBy === 'id') {
      return _.orderBy(this._logList, 'id', false);
    } else {
      return _.orderBy(this._logList, 'priority', false);
    }
  }

  getLog(logId: number): IGreeting {
    return this._logList.find(log => log.id === logId);
  }

  addLog(greeting: IGreeting) {
    this._logList.push(greeting);
  }
}