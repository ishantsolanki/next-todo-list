import React from 'react'
import { Record } from 'immutable'
import { TodosType } from '../../types/Todos'
import { connect } from 'react-redux'

import { getTodo } from '../../redux/selectors/todos'
import { updateTitle } from '../../redux/actions/todoActions'
import { ReduxState } from '../../redux/reducers/RootReducer'

const mapStateToProps = (state: ReduxState, { id }: { id: string }) => ({
  todo: getTodo(state)(id),
})

const mapDispatchToProps = {
  updateTitleBound: updateTitle,
}

interface Props {
  todo: Record<TodosType> | undefined
  updateTitleBound: ({ _id, title }: { _id: string; title: string }) => void
}

export const ChecklistEditor: React.FC<Props> = ({
  todo,
  updateTitleBound,
}) => {
  const handleTitleChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (todo) {
      updateTitleBound({
        _id: todo.get('_id'),
        title: event.currentTarget.value,
      })
    }
  }
  return (
    <>
      {todo && (
        <>
          title:{' '}
          <input
            type="text"
            value={todo.get('title')}
            onChange={handleTitleChange}
          />
        </>
      )}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistEditor)
