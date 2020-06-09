import { createnewTodoApi } from './api'

export const createNewTodo = () => async () => {
  const response = await createnewTodoApi()
  return response.json()
}
