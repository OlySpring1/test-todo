import React from 'react';
import './TodoList.scss';
import { useSelector } from 'react-redux';
import { getTodos } from '../../store';
import Todo from '../Todo/Todo';

const TodoList = () => {
const todos = useSelector(getTodos);

return (
  <ul>
    
    {todos.map((todo: Todo) => (
      <Todo key={todo.id} todo={todo}/>
    ))} 
    
  </ul>
)
  }

export default TodoList;