/// <reference types="react-scripts" />
interface Todo {
  title: string,
  id: string,
  completed: boolean,
}
interface FetchTodo {
  userId: number,
  title: string,
  id: string,
  completed: boolean,
}

interface TodosState {
  todos: Todo[]
}