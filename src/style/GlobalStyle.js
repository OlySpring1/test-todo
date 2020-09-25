import React from 'react';
import { Global, css } from '@emotion/core'
export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
    html,
    body,
    button,
    li,
    ul,
    h1,
    p {
      margin: 0;
      padding: 0;
    }
    body {
      max-width: 550px;
      margin: 0 auto;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 300;
      @media screen and (max-width: 570px){
        max-width: 97%;
      }
    }
    button {
      border: 0;
      background: none;
      font-size: 100%;
      font-size: 100%;
      text-transform: capitalize;
      vertical-align: baseline;
      font-family: inherit;
      font-weight: inherit;
      color: inherit;
    }
            
    `}
  />
)