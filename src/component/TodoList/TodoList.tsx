import React from 'react';
import './TodoList.scss';
import { useSelector } from 'react-redux';
import { getVisibleTodos } from '../../store';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const visibleTodos = useSelector(getVisibleTodos);

  return (
    <ul className="todoapp">
      {visibleTodos.map((todo: Todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList;