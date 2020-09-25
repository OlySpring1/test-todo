import {rootReducer} from './reducers'

export type RootState = ReturnType<typeof rootReducer>;

export const getTodos = (state: RootState) => state.todos;
export const getQuery = (state: RootState) => state.query;
export const getIsLoading = (state: RootState) => state.loading
export const getErrorMessage = (state: RootState) => state.error
export const getVisibleTodos = (state: RootState) => {
  return state.todos
    .filter((todo: Todo) => (
      (todo.title)
        .toLowerCase()
        .includes(state.query.toLowerCase())
    ));
};
