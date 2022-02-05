import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LogService } from 'src/services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  logList: { id: number, priority: number, title: string }[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private logService: LogService
  ) { }

  ngOnInit(): void {
    this.logList = this.logService.getLogList();
  }

  showDetail(logId: number) {
    this.router.navigate([logId], { relativeTo: this.route });
  }
}
