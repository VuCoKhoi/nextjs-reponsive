import React, { type Node } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../src/themes'
import '../styles/globals.css'

type Props = {
  Component: Node,
  pageProps: any,
}

function MyApp({ Component, pageProps }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
