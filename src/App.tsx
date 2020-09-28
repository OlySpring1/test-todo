import React from 'react';
import { useSelector } from 'react-redux'

import TodoList from './component/TodoList/TodoList';
import Search from './component/Search/Search';
import NewTodo from './component/NewTodo/NewTodo';
import { Spinner } from './component/Spinner/Spinner';
import { getIsLoading } from './store/selectors';
import { GlobalStyles } from './component/Global.styles';
const App = () => {
  const loading = useSelector(getIsLoading)
  return (
    <div >
      <GlobalStyles />
      {loading && <Spinner />}
      <Search />
      <TodoList />
      <NewTodo />
    </div>
  );
}

export default App;
