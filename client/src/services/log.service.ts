import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  private _logList: { id: number, priority: number, title: string }[] = [
    { id: 1, priority: 10, title: 'Hi'},
    { id: 2, priority: 100, title: 'Hi'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getLogList() {
    return this._logList;
  }

  getLog(logId: number): { id: number, priority: number, title: string } {
    return this._logList.find(log => log.id === logId);
  }

  addLog(priority: number, title: string) {
    this._logList.push({
      id: this._logList.length,
      priority,
      title
    });
  }
}