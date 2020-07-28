import {
  createStore, combineReducers, applyMiddleware, AnyAction,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './todos';
import query from './search';

const rootReducer = combineReducers({
  todos,
  query,
});

export type RootState = ReturnType<typeof rootReducer>;

export const getTodos = (state: RootState) => state.todos;
export const getQuery = (state: RootState) => state.query;

export const getVisibleTodos = (state: RootState) => {
  return state.todos
    .filter((todo: Todo) => (
      (todo.text)
        .toLowerCase()
        .includes(state.query.toLowerCase())
    ));
};


const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
