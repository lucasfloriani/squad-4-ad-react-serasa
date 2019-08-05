import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const renderApp = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

render(renderApp(), document.getElementById('root'))
serviceWorker.unregister()
