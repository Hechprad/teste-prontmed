import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import TodoItem from '.'

describe('TodoItem component', () => {
  it('should exists', () => {
    expect(TodoItem).toBeDefined()
  })
  it('should render title', () => {
    render(
      <ThemeProvider theme={theme}>
        <ul>
          <TodoItem
            checked
            id={1}
            title="Test1"
            handleEditClick={() => {}}
            handleCheckClick={() => {}}
            handleDeleteClick={() => {}}
          />
          <TodoItem
            checked={false}
            id={2}
            title="Test2"
            handleEditClick={() => {}}
            handleCheckClick={() => {}}
            handleDeleteClick={() => {}}
          />
        </ul>
      </ThemeProvider>
    )

    expect(screen.getByText(/Test1/i)).toBeDefined()
    expect(screen.getByText(/Test2/i)).toBeDefined()
  })
})
