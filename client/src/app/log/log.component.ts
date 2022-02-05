import { Component, OnInit } from '@angular/core';

import { LogService } from 'src/services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  logList: { priority: number, title: string }[] = [];

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    this.logList = this.logService.getLogList();
  }

}
