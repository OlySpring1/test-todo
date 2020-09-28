import React, { useState } from 'react';
import './NewTodo.styled.js';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/modulTodos';
import { ErrorMessage, NewTodoStyled, ButtonAdd } from './NewTodo.styled';
import {colors} from '../../styles/colors'
const NewTodo = () => {
  const dispatch = useDispatch();
  const [titleTask, setTitleTask] = useState('');
  const [titleError, setTitleError] = useState(false);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    
    setTitleTask(value);
    setTitleError(false);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()        
   
    if (titleTask.trim().length === 0 ) {
      setTitleError(true);
      return;
    }
    dispatch(addTodo(titleTask.trim()))
    setTitleTask('');
  }

  return (
    <footer>
      <NewTodoStyled onSubmit={handleSubmit}>
      <input
      type="text"
      className="new-todo__input"
      placeholder="Enter task and press &quot;Add Text&quot; button"
      value={titleTask}
      onChange={handleOnChange}
    />
    <ButtonAdd 
      type="submit"
      propertyHover="background-color" 
      valueHover={colors.GRAY_HOVER}
    >
      Add Task
      </ButtonAdd>
      </NewTodoStyled>
    
    {titleError && (
      <ErrorMessage className="error">Please, enter a task</ErrorMessage>
    )}
  </footer>
  )
}
export default NewTodo;