import React from 'react'
import { render } from '@testing-library/react'
import TodosList from './TodosList'

test('renders the create new button', () => {
  const { getByText } = render(<TodosList />)
  const element = getByText(/Create new/i)
  expect(element).toBeInTheDocument()
})
