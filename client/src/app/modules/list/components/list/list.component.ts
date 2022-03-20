import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ListService } from '../../../../services/list.service';

import * as fromApp from '../../../../store/reducers/App.reducer';
import * as QuestionnaireActions from '../../../../store/actions/Questionnaire.action';

import { Questionnaire } from '../../../../models/Questionnaire.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {
  questionnaireList: Questionnaire[];

  constructor(
    private listService: ListService,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('questionnaire')
      .subscribe(
        (subscriber) => {
          this.questionnaireList = subscriber.list;
        }
      );

    this.listService.fetch()
      .subscribe(questionnaireList => {
        this.store.dispatch(new QuestionnaireActions.GetQuestionnaire(questionnaireList));
      })
  }
}
