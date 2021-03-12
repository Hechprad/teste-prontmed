import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import createStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from 'styles/theme'

import Home from '../index'

const INITIAL_STATE = {
  todosList: {
    todos: [
      {
        completed: true,
        id: 1,
        inserted_at: '2021-03-09T22:00:55.111320',
        name: 'new todo 1',
        updated_at: '2021-03-09T22:34:55.111320',
      },
      {
        completed: false,
        id: 2,
        inserted_at: '2021-03-09T22:34:55.111320',
        name: 'new todo 2',
        updated_at: '2021-03-09T22:34:55.111320',
      },
    ],
    isLoading: false,
    hasError: false,
  },
}
const mockStore = createStore([])
const store = mockStore(INITIAL_STATE)

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((element) => element as React.ReactPortal)
})

test('Home should renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    )
    .toJSON()

  expect(tree).toMatchSnapshot()
})
