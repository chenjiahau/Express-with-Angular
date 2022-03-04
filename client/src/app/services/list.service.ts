import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface IPost {
  email: string;
  firstname: string;
  lastname: string;
  gender: string;
  age: string;
  aboutyou: string;
};

@Injectable({
  providedIn: 'root'
})
export class ListService {
  hasJoined = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  fetch(): Observable<any> {
    let queryString = new HttpParams().set('action', 'get');
    queryString = queryString.append('time', '1')

    return this.http.get<{ list: IPost[] }>(
      '/api/questionnaire',
      {
        headers: new HttpHeaders({
          'Custom-Header': 'Test'
        }),
        responseType: 'json',
        params: queryString
      }
    );
  }

  add(postData: IPost): Observable<any> {
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
          this.hasJoined.next(true);
        })
      )
  }
}
