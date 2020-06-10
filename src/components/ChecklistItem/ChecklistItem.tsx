import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

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
