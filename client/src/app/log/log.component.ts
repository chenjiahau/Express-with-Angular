import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { LogService } from 'src/services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  orderBy: string;
  logList: { id: number, priority: number, title: string }[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private logService: LogService
  ) { }

  ngOnInit(): void {
    this.orderBy = this.route.snapshot.queryParams['orderBy']
    !this.orderBy && (this.orderBy = 'id');
    this.logList = this.logService.getLogList(this.orderBy);

    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.orderBy = queryParams['orderBy'];
        this.logList = this.logService.getLogList(this.orderBy);
      }
    )
  }

  showDetail(logId: number) {
    this.router.navigate(
      [logId],
      {
        relativeTo: this.route,
        queryParamsHandling: 'preserve'
      }
    );
  }
}
