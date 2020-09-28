import React from 'react';
import { useSelector } from 'react-redux'

import TodoList from './component/TodoList/TodoList';
import Search from './component/Search/Search';
import NewTodo from './component/NewTodo/NewTodo';
import { Global, css } from '@emotion/core'
import { Spinner } from './component/Spinner/Spinner';
import { getIsLoading } from './store/selectors';

const App = () => {
  const loading = useSelector(getIsLoading)

  return (
    <div >
      <Global
        styles={css`
        * {
          box-sizing: border-box;
        }
        html,
        body,
        button,
        li,
        ul,
        h1,
        p,
        input{
          margin: 0;
          padding: 0;
        }
        body {
          max-width: 550px;
          margin: 0 auto;
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 20px;
          line-height: 1.4em;
          color: #4d4d4d;
        
          font-weight: 300;
          @media screen and (max-width: 570px){
            max-width: 97%;
        }
        li {
          list-style: none;
        }
        button {
          border: none;
          background: none;
          text-transform: capitalize;
          vertical-align: baseline;
          font: inherit;
        }
        button: focus{
          outline: none;
        }
        input {
          font: inherit;
          outline: none;
        }
        `}
      />
      {loading && <Spinner />}
      <Search />
      <TodoList />
      <NewTodo />
    </div>
  );
}

export default App;
