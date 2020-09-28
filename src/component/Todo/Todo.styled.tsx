import styled from '@emotion/styled/macro';
import { css } from '@emotion/core';
import {colors} from '../../styles/colors'

type DynamicHoverStyledProps = {
  propertyHover: string;
  valueHover: string;
}
type TodoItemProps = {
  isToggle: boolean
}
export const dynamicHoverStyled = (props: DynamicHoverStyledProps) =>
  css`
  transition: ${props.propertyHover} 0.2s;
  &:hover {
    ${props.propertyHover}: ${props.valueHover};
  }
`
export const TodoItem = styled('button')`
  width: 75%;
  background-color: #fff;
  text-align: start;
  word-break: break-all;
  color: ${(props: TodoItemProps) =>
  props.isToggle ? `${colors.TEXT_COLOR}` : '#0050c9'};
}

`
export const TodoStyled = styled('div')`
  width: 100%;
  min-height: 58px;
  padding: 6px 10px 6px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c3c0c0;
  background-color: #fff;
`

export const ButtonDelete = styled('button')`
  background-color: ${colors.GRAY};
  padding: 10px;
  margin-left: 12px;
  border-radius: 15px;
  padding: 6px 10px;  
  text-decoration: none;
  ${dynamicHoverStyled}
`