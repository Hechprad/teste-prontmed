import { render, screen } from '@testing-library/react'
import App from './App'

const createRootContainer = () => {
  let container = document.getElementById('root')
  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', 'root')
    document.body.appendChild(container)
  }
  return container
}

test('renders learn react link', () => {
  render(<App />, { container: createRootContainer() })
  const linkElement = screen.getByText(/all tasks/i)
  expect(linkElement).toBeInTheDocument()
})
