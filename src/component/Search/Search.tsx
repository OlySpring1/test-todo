import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
  const [text, setText] = useState('');

return (
  <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      value={text}
    />

  </header>

)
}
export default Search;