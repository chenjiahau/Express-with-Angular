import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';

import { ListService } from 'src/app/services/list.service';
import { Questionnaire } from '../../../../models/Questionnaire.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  questionnaireList: Questionnaire[];
  postList: Questionnaire[];

  constructor(
    private listService: ListService,
    private store: Store<{ questionnaire: { list: Questionnaire[] }}>
  ) { }

  ngOnInit(): void {
    this.listService.fetch()
      .subscribe(res => {
        this.store.select('questionnaire')
          .subscribe(
            (subscriber) => {
              this.questionnaireList = subscriber.list;
            }
          )
      })
  }
}
