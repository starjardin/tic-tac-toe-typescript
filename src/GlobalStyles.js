import { createGlobalStyle } from 'styled-components'

import UsuaziHosomoziWoff from './fonts/usuazi-hosomozi.regular.woff'
import UsuaziHosomoziWoff2 from './fonts/usuazi-hosomozi.regular.woff2'

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Usuazi Hosomozi';
    src: local('Usuazi Hosomozi'), local('UsuaziHosomozi'), 
         url(${UsuaziHosomoziWoff2}) format('woff2'),
         url(${UsuaziHosomoziWoff}) format('woff');
  }
  
  body * {
    font-family: 'Usuazi Hosomozi', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
    font-style: normal;
    font-weight: normal;
    color: #000000;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  h1, label {
    font-size: clamp(1.7rem, 4rem, 4.5rem); 
    line-height: 72px;
    margin: 0 0 2rem 0;
  }

  body {
    padding: clamp(1rem, 2rem, 4rem);
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button {
    cursor: pointer;
    display: block;
    background-color: #fff;
    border: none;
    padding: 1rem;
    margin: auto;
    font-size: 72px;
    line-height: 72px;
    text-align: center;
    color: #000000;
    &:hover {
      border-radius: 5px;
      background-color: #dddddd;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }

  input {
    font-size: 38px;
    line-height: 48px;
    border: none;
    color: #8B8585;
    padding: .3rem 1rem;
    border-radius: 5px;
    text-align: start;
    display: inline-block;
    margin: 0 1rem;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 3px 5px #8B8585;
  }

  label {
    text-align: start;
  }

  label > span {
    font-size: 48px;
    line-height: 48px;
    color: #000000;
  }

  [type='number']:focus {
    box-shadow: none;
    max-width: 4.5rem;
  }
  [type='number'] {
    max-width: 4.5rem;
  }

  p {
    font-size: 48px;
    line-height: 48px;
    color: #000000;
    text-align: start;
  }
`
