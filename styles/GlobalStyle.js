import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
  padding: 0;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
}

body {
  --lightGrey: #393E46;
    --darkGrey: #222831;
    --yellow:#FFD369;
    --white: #EEEEEE;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

li {
  list-style: none;
}

`;

export default GlobalStyle;
