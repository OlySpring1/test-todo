import React, { useState } from 'react';
import './Todo.styled.ts';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../store/modulTodos';
import cn from 'classnames';
import { TodoStyled } from './Todo.styled';
type PropsTodo = {
  todo: Todo
}

const Todo: React.FC<PropsTodo> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isToggle, setIsToggle] = useState(false);
  const changeStatus = () => {
    dispatch(toggleTodo(todo.id));
    setIsToggle(!isToggle);
  }

  const deleteTodo = (id: string) => {
    dispatch(removeTodo(id))
  }

  return (
    <TodoStyled color="#717070" property="background-color">
      <button
        type="button"
        className={cn("todo__item", {
          "todo__item-active": isToggle
        })}
        onClick={changeStatus}
      >
        {todo.title}
      </button>
      {isToggle && (
        <button
          className="todo__btn-delete"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      )}
    </TodoStyled>
  )
}

export default Todo;