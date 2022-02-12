import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { IGreeting } from 'src/models/greeting';
import { LogService } from 'src/services/log.service';

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.css']
})
export class LogDetailComponent implements OnInit {
  logId: number;
  log: IGreeting;

  constructor(
    private route: ActivatedRoute,
    private logService: LogService
  ) { }

  ngOnInit(): void {
    let logId: number = parseInt(this.route.snapshot.params['id']);
    this.log = this.logService.getLog(logId);

    this.route.params
      .subscribe((params: Params) => {
        logId = parseInt(params['id']);
        this.log = this.logService.getLog(logId);
      });
  }
}
