import React, { useEffect } from 'react';
import './App.scss';
import { useSelector } from 'react-redux';
import TodoList from './component/TodoList/TodoList';
import Search from './component/Search/Search';
import { getTodos } from './store';
import NewTodo from './component/NewTodo/NewTodo';

const App = () => {
  const todos = useSelector(getTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify([...todos]));
  }, [todos]);

  return (
    <div >
      <Search />
      <TodoList />
      <NewTodo />
    </div>
  );
}

export default App;
