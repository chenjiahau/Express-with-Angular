import { Component, OnInit } from '@angular/core';

import { IPost, ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  postList: IPost[];

  constructor(
    private listService: ListService,
  ) { }

  ngOnInit(): void {
    this.listService.fetch()
      .subscribe(res => this.postList = res)
  }
}
