import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<DefaultProps>`


body {
    margin: 0;
    font-family:"Regular", "sans-serif";
    background: #F5F5F5;

    button {
      cursor: pointer;
      display: block;
    }
  }

  :root{
    --base-font-color: ${(props) => props.theme.headerColor};
    }
`

export default GlobalStyle

export interface DefaultProps {
  theme: Itheme
}

export interface Itheme {
  body: string;
  headerColor: string;
}    
