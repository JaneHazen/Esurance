import { combineReducers } from 'redux';
import questions from './questions_reducer'

const rootReducer = combineReducers({
  questions
});

export default rootReducer;