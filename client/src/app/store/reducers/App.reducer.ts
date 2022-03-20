import { ActionReducerMap } from "@ngrx/store";

import { QuestionnaireState, questionnaireReducer } from "./Questionnaire.reducer";

export interface AppState {
  questionnaire: QuestionnaireState;
}

export const appReducer: ActionReducerMap<AppState> = {
  questionnaire: questionnaireReducer
};