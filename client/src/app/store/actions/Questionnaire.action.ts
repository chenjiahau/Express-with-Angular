import { Action } from '@ngrx/store';
import { Questionnaire } from '../../models/Questionnaire.model';

export const GET_QUESTIONNAIRE = 'GET_QUESTIONNAIRE'
export class GetQuestionnaire implements Action {
  readonly type = GET_QUESTIONNAIRE;
  constructor(public payload: Questionnaire[]) {}
}

export const ADD_QUESTIONNAIRE = 'ADD_QUESTIONNAIRE'
export class AddQuestionnaire implements Action {
  readonly type = ADD_QUESTIONNAIRE;
  constructor(public payload: Questionnaire) {}
}

export type QuestionnaireActions = GetQuestionnaire | AddQuestionnaire;
