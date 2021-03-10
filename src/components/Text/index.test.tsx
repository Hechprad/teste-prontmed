import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import Text from '.'

describe('Text component', () => {
  it('should exists', () => {
    expect(Text).toBeDefined()
  })
  it('should render children', () => {
    render(
      <ThemeProvider theme={theme}>
        <Text>Test</Text>
      </ThemeProvider>
    )

    expect(screen.getByText(/Test/i)).toBeDefined()
  })
})
