import { combineReducers } from 'redux';
import todos from './modulTodos';
import query from './modulSearch';
import loading from './moduleLoader';
import error from './modulErrorMessage';
export const rootReducer = combineReducers({
  todos,
  query,
  loading,
  error
});
