import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyles } from '@theme'
import ToastContainer from '@molecules/ToastContainer'
import ScreenLoader from '@molecules/ScreenLoader'

const HomePage = lazy(() => import('./pages/HomePage/index'))

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <ToastContainer />
      <Suspense fallback={<ScreenLoader />}>
        <Route path="/" exact component={props => <HomePage {...props} />} />
      </Suspense>
    </>
  </ThemeProvider>
)

export default App
