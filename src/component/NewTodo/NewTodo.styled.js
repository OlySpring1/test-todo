import styled from '@emotion/styled/macro';
import {dynamicHoverStyled} from '../Todo/Todo.styled'
import {colors} from '../../styles/colors'
export const NewTodoStyled = styled('form')`

  width: 100%;
  margin-bottom: 40px;
  border: 1px solid #c3c0c0;
  border-radius: 16px;
  background-color: #fff;
  
  & > input {
    width: 75%;
    color: inherit;
    border: none;
    border-radius: 16px;
    padding: 16px 0 16px 40px;
    font-style: italic;
  }
  
    @media screen and (max-width: 570px){
      .new-todo__input {
        width: 100%;
      }
      .new-todo__btn {
        width: 100%;
        border-radius: 0 0 16px 16px;
      }
    }
    `
  export const ButtonAdd = styled('button')`
    width: 25%;
    height: 100%;
    background-color: ${colors.GRAY};
    border-radius: 0 16px 16px 0;
    font-style: normal;
    border-left: 1px solid #c3c0c0;
    border-radius: 0 16px 16px 0;
    padding: 16px 0;
    ${dynamicHoverStyled}
  `
export const ErrorMessage = styled.p`
  position: relative;
  top: 100px;
  text-align: center;
  font-size: 14px;
  color: rgba(175, 47, 47, 1);
`