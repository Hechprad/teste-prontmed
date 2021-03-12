import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import Button from '.'

describe('Button component', () => {
  it('should exists', () => {
    expect(Button).toBeDefined()
  })
  it('should render children', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Button</Button>
      </ThemeProvider>
    )

    expect(screen.getByText(/Button/i)).toBeDefined()
  })
  it('should be clickable', () => {
    const onClickFn = jest.fn()

    render(
      <ThemeProvider theme={theme}>
        <Button onClick={() => onClickFn()} buttonName="Button" />
      </ThemeProvider>
    )

    const button = screen.getByRole('button', { name: 'Button' })
    userEvent.click(button)

    expect(onClickFn).toHaveBeenCalledTimes(1)
  })
})
