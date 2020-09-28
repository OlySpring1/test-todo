import React, { useState } from 'react';
import './Todo.styled.tsx';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../../store/modulTodos';
import { ButtonDelete, TodoItem, TodoStyled } from './Todo.styled';
import {colors} from '../../styles/colors';

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
    <TodoStyled >
      <TodoItem 
        isToggle={isToggle} 
        onClick={changeStatus}
      >
        {todo.title}
      </TodoItem>

      {isToggle && (
        <ButtonDelete
        valueHover={colors.GRAY_HOVER}
        propertyHover="background-color"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </ButtonDelete>
      )}
    </TodoStyled>
  )
}

export default Todo;