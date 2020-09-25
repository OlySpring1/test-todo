import React, { KeyboardEvent } from 'react';
import './Search.styled.ts';
import { useDispatch } from 'react-redux';
import { setChangedSearchInput } from '../../store/modulSearch';
import { InputStyled, TitleStyled } from './Search.styled';

const Search = () => {
  const dispatch = useDispatch();

  // const setVisibleQueryWithDebounce = useCallback(
  //   debounce((actualQuery: string) => dispatch(setQuery(actualQuery)), 500), [],
  // );

  const handleOnKeyUp = (e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(setChangedSearchInput(value));
  };

  return (
    <header >
      <TitleStyled>todos</TitleStyled>
      <InputStyled
        type="text"
        className="search"
        placeholder="Enter task name for search..."
        onKeyUp={(e) => handleOnKeyUp(e)}
      />
    </header>
  )
}
export default Search;