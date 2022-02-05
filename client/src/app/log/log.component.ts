import { Component, OnInit } from '@angular/core';

import { LogService } from 'src/services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private logService: LogService) { }

  ngOnInit(): void {
    console.log(this.logService.getLog());
  }

}
