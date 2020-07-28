/// <reference types="react-scripts" />
interface Todo {
  text: string,
  id: string,
  completed: boolean,
}

interface TodosState {
  todos: Todo[]
}