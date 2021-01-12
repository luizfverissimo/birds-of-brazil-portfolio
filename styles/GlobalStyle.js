import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

`;

export default GlobalStyle;
