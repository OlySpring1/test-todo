import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import { getVisibleTodos } from '../../store/selectors';
import { TodoListStyled } from './TodoList.styled';
import { loadTodo } from '../../store/modulTodos';

const TodoList = () => {
  const dispatch = useDispatch();

  const visibleTodos = useSelector(getVisibleTodos);
  useEffect(() => {
    dispatch(loadTodo())
  }, [dispatch])

  return (
    <TodoListStyled>
      {visibleTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </TodoListStyled>
  )
}

export default TodoList;