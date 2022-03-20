import { Questionnaire } from '../../models/Questionnaire.model';
import * as QuestionnaireActions from '../actions/Questionnaire.action';

interface IQuestionnaireState {
  list: Questionnaire[]
};

const initialState: IQuestionnaireState = {
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
    default:
      return state;
  }
}
