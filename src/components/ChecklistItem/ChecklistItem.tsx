import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { updateChecklistContentApi } from '../../redux/actions/api'

interface Props {
  checklist: {
    _id: string
    checked: boolean
    content: string
  }
}

export const ChecklistItem: React.FC<Props> = ({ checklist }) => {
  const [content, setContent] = useState<string>(checklist.content)
  const [checked, setChecked] = useState<boolean>(checklist.checked)

  const [debouncedContent] = useDebounce(content, 500)

  useEffect(() => {
    updateChecklistContentApi({
      _id: checklist._id,
      content: debouncedContent,
    })
  }, [checklist._id, debouncedContent])

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />{' '}
      <input
        type="text"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
    </div>
  )
}

export default ChecklistItem
