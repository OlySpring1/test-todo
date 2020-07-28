import {
  createStore, combineReducers, applyMiddleware, AnyAction,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './todos';
const rootReducer = combineReducers({
  todos
});

export type RootState = ReturnType<typeof rootReducer>;

export const getTodos = (state: RootState) => state.todos;

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
