import React, { useState, useEffect } from 'react'
import { TodosType } from '../../types/Todos'
import { connect } from 'react-redux'
import { useDebounce } from 'use-debounce'

import { addNewChecklistApi } from '../../redux/actions/api'

import { updateTitle } from '../../redux/actions/todoActions'
import ChecklistItem from '../ChecklistItem/ChecklistItem'

const mapDispatchToProps = {
  updateTitleBound: updateTitle,
}

interface Props {
  todo: TodosType
  updateTitleBound: ({ _id, title }: { _id: string; title: string }) => void
}

export const ChecklistEditor: React.FC<Props> = ({
  todo,
  updateTitleBound,
}) => {
  const [title, setTitle] = useState<string>(todo.title)
  const [debouncedSearchTerm] = useDebounce(title, 500)

  useEffect(() => {
    updateTitleBound({
      _id: todo._id,
      title: debouncedSearchTerm,
    })
  }, [debouncedSearchTerm, todo._id, updateTitleBound])
  return (
    <>
      {todo && (
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      )}
      {todo &&
        todo.checklist.map((listitem) => <ChecklistItem key={listitem._id} checklist={listitem} />)}
      <div>
        <button onClick={(event) => addNewChecklistApi(todo._id)}>
          New item
        </button>
      </div>
    </>
  )
}

export default connect(null, mapDispatchToProps)(ChecklistEditor)
