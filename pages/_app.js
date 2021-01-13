import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'
import importFonts from '../styles/importFonts.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}