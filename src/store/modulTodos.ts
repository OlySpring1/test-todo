import { Action } from 'redux';
import { v4 as uuidv4 } from 'uuid';
export const REQUESTED_TODOS = 'REQUESTED_TODOS';
export const REQUESTED_TODOS_SUCCEEDED = 'REQUESTED_TODOS_SUCCEEDED'
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const loadTodo = () => ({
  type: REQUESTED_TODOS,
})

export const requestedTodoSucceeded = (todos: FetchTodo[]) => ({
  type: REQUESTED_TODOS_SUCCEEDED,
})

export const addTodo = (title: string) => ({
  type: ADD_TODO,
  title,
})

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  id,
})

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  id,
})
type requestedTodo = Action<typeof REQUESTED_TODOS> 

type requestedTodoSucceeded = Action<typeof REQUESTED_TODOS_SUCCEEDED> & {
  todos: FetchTodo[]
}

type addTodo = Action<typeof ADD_TODO> & {
  title: string;
};

type toggleTodo = Action<typeof TOGGLE_TODO> & {
  id: string;
};

type removeTodo = Action<typeof REMOVE_TODO> & {
  id: string;
};

type AllowedActions = requestedTodoSucceeded | addTodo | toggleTodo | removeTodo;

let initialState: Todo[] = [];

// if (localStorage.getItem('todos')) {
//   initialState = [...JSON.parse(localStorage.getItem('todos') || '')];
// }

const todos = (todos = initialState, action: AllowedActions) => {
  switch (action.type) {
    case REQUESTED_TODOS_SUCCEEDED:
      return [...todos, ...action.todos]
    case ADD_TODO:
      return [
        ...todos,
        {
          id: uuidv4(),
          title: action.title,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return todos.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ))
    case REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.id)
    
      default:
      return todos
  }
}

export default todos;