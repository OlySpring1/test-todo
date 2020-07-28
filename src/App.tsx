import React, { useState, useCallback } from 'react';
import './App.scss';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todos';
import debounce from 'lodash.debounce';
import TodoList from './component/TodoList/TodoList';
import Search from './component/Search/Search';

const App = () => {
  const dispatch = useDispatch();
  const [titleTask, setTitleTask] = useState('');
  
  const setTitleTaskWithDebounce = useCallback(
    debounce((actualQuery: string) => dispatch(addTodo(actualQuery)), 500), []
  );

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setTitleTask(value);
  };

  const handleOnClick = () => {
    setTitleTaskWithDebounce(titleTask);
    setTitleTask('');
  }
  return (
    <div className="todo">
      <Search />
      <TodoList />
        <footer className="footer">
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={titleTask}
            onChange={handleOnChange}
          />
          <button 
            type="button"
            onClick={handleOnClick}
          >
          Add Task
          </button>
        </footer>
      

    </div>
  );
}

export default App;
