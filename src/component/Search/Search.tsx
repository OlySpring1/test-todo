import React, { useState, useCallback, KeyboardEvent } from 'react';
import './Search.scss';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';
import { setQuery } from '../../store/search';
import { getQuery } from '../../store';

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector(getQuery);

  const setVisibleQueryWithDebounce = useCallback(
    debounce((actualQuery: string) => dispatch(setQuery(actualQuery)), 500), [],
  );

  const handleOnKeyUp = (e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    setVisibleQueryWithDebounce(value);
  };

return (
  <header className="header">
    <h1>todos</h1>
    <input
      className="new-todo"
      placeholder="Enter task name for search..."
      onKeyUp={(e) => handleOnKeyUp(e)}
    />
  </header>
)
}
export default Search;