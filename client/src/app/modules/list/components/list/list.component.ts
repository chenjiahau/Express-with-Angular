import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ListService } from '../../../../services/list.service';
import { QuestionnaireState } from '../../../../store/reducers/Questionnaire.reducer';
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
    private store: Store<{ questionnaire: QuestionnaireState}>
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
