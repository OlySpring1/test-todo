import React, { useState, useCallback } from 'react';
import './NewTodo.scss';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { addTodo } from '../../store/todos';

const NewTodo = () => {
  const dispatch = useDispatch();
  const [titleTask, setTitleTask] = useState('');
  const [titleError, seTtitleError] = useState(false);

  const setTitleTaskWithDebounce = useCallback(
    debounce((actualQuery: string) => dispatch(addTodo(actualQuery)), 500), []
  );

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setTitleTask(value);
    seTtitleError(false);
  };

  const handleOnClick = () => {
    if (titleTask.trim().length === 0 ) {
      seTtitleError(true);
      return;
    }

    setTitleTaskWithDebounce(titleTask);
    setTitleTask('');
  }

  return (
    <footer className="footer">
    <div className="new-todo">
    <input
      type="text"
      className="new-todo__input"
      placeholder="Enter task and press &quot;Add Text&quot; button"
      value={titleTask}
      onChange={handleOnChange}
    />
    <button 
      type="button" 
      onClick={handleOnClick} 
      className="new-todo__btn" 
    >
      Add Task
      </button>
    </div>
    {titleError && (
      <p className="error">Please, enter a task</p>
    )}
  </footer>
  )
}
export default NewTodo;