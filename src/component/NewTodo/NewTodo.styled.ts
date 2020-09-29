import styled from '@emotion/styled/macro';
import {dynamicHoverStyled} from '../Todo/Todo.styled'
import {colors} from '../../styles/colors'
type ErrorMessageProps = {
  top: string
}
export const NewTodoStyled = styled('form')`
  width: 100%;
  margin-bottom: 40px;
  border: 1px solid #c3c0c0;
  border-radius: 16px;
  background-color: #fff;
  positon: relative;
  & > input {
    width: 75%;
    color: inherit;
    border: none;
    border-radius: 16px;
    padding: 16px 0 16px 40px;
    font-style: italic;
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
export const ErrorMessage = styled('p')`
  top: ${(props: ErrorMessageProps) => props.top };  
  position: relative;
  text-align: center;
  font-size: 14px;
  color: rgba(175, 47, 47, 1);
`