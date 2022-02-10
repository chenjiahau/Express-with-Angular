import { Injectable } from '@angular/core';

import { IGreeting } from '../models/greeting';

@Injectable()
export class LogService {
  private _logList: IGreeting[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getLogList() {
    return this._logList;
  }

  getLog(logId: number): IGreeting {
    return this._logList.find(log => log.id === logId);
  }

  addLog(greeting: IGreeting) {
    this._logList.push(greeting);
  }
}