import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  private _log: {priority: number, title: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getLog() {
    return this._log;
  }

  addLog(priority: number, title: string) {
    this._log.push({
      priority,
      title
    });
  }
}