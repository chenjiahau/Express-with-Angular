import { Questionnaire } from '../../models/Questionnaire.model';
import * as QuestionnaireActions from '../actions/Questionnaire.action';

export interface QuestionnaireState {
  hasJoined: boolean;
  list: Questionnaire[]
};

const initialState: QuestionnaireState = {
  hasJoined: false,
  list: []
};

export const questionnaireReducer = (
  state = initialState,
  action: QuestionnaireActions.QuestionnaireActions
) => {
  switch (action.type) {
    case QuestionnaireActions.GET_QUESTIONNAIRE:
      return {
        ...state,
        list: action.payload
      };
    case QuestionnaireActions.ADD_QUESTIONNAIRE:
      return {
        ...state,
        list: [ ...state.list, action.payload ]
      };
    case QuestionnaireActions.SET_HASJOINED:
      return {
        ...state,
        hasJoined: action.payload
      };
    default:
      return state;
  }
}
