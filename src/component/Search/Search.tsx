import React, { KeyboardEvent } from 'react';
import './Search.styled.ts';
import { useDispatch, useSelector } from 'react-redux';
import { setChangedSearchInput } from '../../store/modulSearch';
import { InputStyled, TitleStyled } from './Search.styled';
import { ErrorMessage } from '../NewTodo/NewTodo.styled';
import { getErrorMessage } from '../../store/selectors';

const Search = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(getErrorMessage)
  
  const handleOnKeyUp = (e: KeyboardEvent) => {
    const { value } = e.target as HTMLInputElement;
    dispatch(setChangedSearchInput(value));
  };

  return (
    <header >
      <TitleStyled>todos</TitleStyled>
      {true
        && (
          <ErrorMessage>
          {errorMessage}
          </ErrorMessage>
        )}

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