import React from 'react'
import { useParams } from 'react-router-dom'
import useSWR from 'swr'
import { API_ENDPOINT, fetchTodoApi } from '../../redux/actions/api'

import ChecklistEditor from '../ChecklistEditor/ChecklistEditor'

export const Checklist: React.FC<{}> = () => {
  const { todoId } = useParams()
  const { data } = useSWR(
    `${API_ENDPOINT}/fetchTodo/${todoId}`,
    fetchTodoApi(todoId),
  )

  return data ? <ChecklistEditor todo={data} /> : <></>
}

export default Checklist
