import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders header', () => {
  const { getByText } = render(<Header />)
  const element = getByText(/The Next Todo List/i)
  expect(element).toBeInTheDocument()
})
