import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LogService } from 'src/services/log.service';

@Component({
  selector: 'app-log-detail',
  templateUrl: './log-detail.component.html',
  styleUrls: ['./log-detail.component.css']
})
export class LogDetailComponent implements OnInit {
  logId: number;
  log: { id: number, priority: number, title: string };

  constructor(
    private route: ActivatedRoute,
    private logService: LogService
  ) { }

  ngOnInit(): void {
    let logId: number = parseInt(this.route.snapshot.params['id']);
    this.log = this.logService.getLog(logId);
    console.log(this.log);
    this.route.params
      .subscribe((params: Params) => {
        logId = parseInt(params['id']);
        this.log = this.logService.getLog(logId);
      });
  }
}
