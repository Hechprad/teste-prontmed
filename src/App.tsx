import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import Routes from 'routes'

import store from 'store'
import theme from 'styles/theme'
import GlobalStyle from 'styles/global'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <GlobalStyle />
            <Routes />
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App
