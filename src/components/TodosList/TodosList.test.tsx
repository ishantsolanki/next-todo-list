import React from 'react'
import { List } from 'immutable'
import { fireEvent } from '@testing-library/react'
import { TodosList } from './TodosList'
import { act } from 'react-dom/test-utils'
import { renderWithRouter } from '../../testUtils'

test('renders the create new button', () => {
  const { getByText } = renderWithRouter(
    <TodosList
      todos={List()}
      createNewTodoBound={() => Promise.resolve()}
      fetchTodosBound={() => true}
    />,
  )
  const element = getByText(/Create new/i)
  expect(element).toBeInTheDocument()
})

test('redirects to new todo list on creating new todo', async () => {
  const { getByText, history } = renderWithRouter(
    <TodosList
      todos={List()}
      createNewTodoBound={() => Promise.resolve({ _id: 'newTodoId' })}
      fetchTodosBound={() => true}
    />,
  )
  await act(async () => {
    await fireEvent.click(getByText(/Create new/i))
    expect(history.location.pathname).toEqual('/todos/newTodoId')
  })
})
