import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  private _logList: { priority: number, title: string }[] = [
    { priority: 10, title: 'Hi'},
    { priority: 100, title: 'Hi'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getLogList() {
    return this._logList;
  }

  addLog(priority: number, title: string) {
    this._logList.push({
      priority,
      title
    });
  }
}