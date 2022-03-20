import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Questionnaire } from '../models/Questionnaire.model';
import * as QuestionnaireActions from '../store/actions/Questionnaire.action';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  hasJoined = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private store: Store<{ questionnaire: { list: Questionnaire[] }}>
  ) { }

  fetch(): Observable<any> {
    let queryString = new HttpParams().set('action', 'get');
    queryString = queryString.append('time', '1')

    return this.http
      .get(
        '/api/questionnaire',
        {
          headers: new HttpHeaders({
          'Custom-Header': 'Test'
          }),
          responseType: 'json',
          params: queryString
        }
      )
      .pipe(
        pluck('list'),
        tap(items => {
          const postList: Questionnaire[] = [];
          items.map((item: Questionnaire) => postList.push(item));
          this.store.dispatch(new QuestionnaireActions.GetQuestionnaire(postList));
        })
      )
  }

  add(postData: Questionnaire): Observable<any> {
    let queryString = new HttpParams().set('action', 'post');
    queryString = queryString.append('time', '2')
 
    return this.http
      .post<{ message: string }>(
        '/api/questionnaire',
        postData,
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Test'
          }),
          params: queryString
        }
      )
      .pipe(
        tap(() => {
          this.store.dispatch(new QuestionnaireActions.AddQuestionnaire(postData));
          this.hasJoined.next(true);
        })
      )
  }
}
