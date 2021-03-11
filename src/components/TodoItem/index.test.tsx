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
          <TodoItem checked title="Test1" />
          <TodoItem checked={false} title="Test2" />
        </ul>
      </ThemeProvider>
    )

    expect(screen.getByText(/Test1/i)).toBeDefined()
    expect(screen.getByText(/Test2/i)).toBeDefined()
  })
})
