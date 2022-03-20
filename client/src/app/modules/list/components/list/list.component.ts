import { Component, OnInit } from '@angular/core';
import { Questionnaire } from 'src/app/models/Questionnaire.model';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  postList: Questionnaire[];

  constructor(
    private listService: ListService,
  ) { }

  ngOnInit(): void {
    this.listService.fetch()
      .subscribe(res => this.postList = res)
  }
}
