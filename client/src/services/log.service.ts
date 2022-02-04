import { Injectable } from '@angular/core';

@Injectable()
export class logService {
  log = [];

  constructor() { }

  ngOnInit(): void {
  }

  addLog(priority: number, title: string) {
    this.log.push({
      priority,
      title
    });
  }
}