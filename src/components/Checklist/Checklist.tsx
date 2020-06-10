import React from 'react'
import { useParams } from 'react-router-dom'

import ChecklistEditor from '../ChecklistEditor/ChecklistEditor'

export const Checklist: React.FC<{}> = () => {
  const { todoId } = useParams()

  return <ChecklistEditor id={todoId} />
}

export default Checklist
