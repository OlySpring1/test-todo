import styled from '@emotion/styled/macro';
import { css } from '@emotion/core';
  // @ts-ignore
export const dynamicHoverStyled = (props) =>
  css`
  transition: ${props.property} 0.2s;
  &:hover {
    ${props.property}: ${props.color};
  }
`
export const TodoStyled = styled('li')`
  width: 100%;
  min-height: 58px;
  padding: 6px 10px 6px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c3c0c0;
  background-color: #fff;

& > .todo__item {
  width: 75%;
  background-color: #fff;
  text-align: start;
  word-break: break-all;
  color: #0050c9;
  &-active {
    color: #4d4d4d;
  }
  cursor: pointer;
}

& > .todo__btn-delete {
  background-color: #c3c0c0;
  padding: 10px;
  margin-left: 12px;
  border-radius: 15px;
  padding: 6px 10px;
  text-decoration: none;
  ${dynamicHoverStyled}
}
`
