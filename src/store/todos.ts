import { Action } from 'redux';
import { v4 as uuidv4 } from 'uuid';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  text,
})

export const toggleTodo = (id: string) => ({
  type: 'TOGGLE_TODO',
  id,
})

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  id,
})

type addTodo = Action<typeof ADD_TODO> & {
  text: string;
};

type toggleTodo = Action<typeof TOGGLE_TODO> & {
  id: string;
};

type removeTodo = Action<typeof REMOVE_TODO> & {
  id: string;
};

type AllowedActions = addTodo | toggleTodo | removeTodo;

const initialState: Todo[] = [];

const todos = (todos = initialState, action: AllowedActions) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...todos,
        {
          id: uuidv4(),
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return todos.map(todo => (
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ))
    case 'REMOVE_TODO':
      return todos.filter(todo => todo.id !== action.id)
    default:
      return todos
  }
}

export default todos;