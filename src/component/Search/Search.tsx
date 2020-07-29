import React, { useCallback, KeyboardEvent } from 'react';
import './Search.scss';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { setQuery } from '../../store/search';

const Search = () => {
  const dispatch = useDispatch();

  const setVisibleQueryWithDebounce = useCallback(
    debounce((actualQuery: string) => dispatch(setQuery(actualQuery)), 500), [],
  );

  const handleOnKeyUp = (e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    setVisibleQueryWithDebounce(value);
  };

  return (
    <header className="header">
      <h1 className="h1">todos</h1>
      <input
        type="text"
        className="search"
        placeholder="Enter task name for search..."
        onKeyUp={(e) => handleOnKeyUp(e)}
      />
    </header>
  )
}
export default Search;