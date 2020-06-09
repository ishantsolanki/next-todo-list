import { createnewTodoApi, fetchTodosApi } from './api'
import { TodosType } from '../../types/Todos'
import { todoTypes, TodosActionTypes } from './todoActionTypes'

export const createNewTodo = () => async () => {
  const response = await createnewTodoApi()
  return response.json()
}

type fetchTodoSuccessType = (response: TodosType[]) => TodosActionTypes
export const fetchTodoSuccess: fetchTodoSuccessType = (response) => ({
  type: todoTypes.FETCH_TODO_SUCCESS,
  response,
})

type fetchTodosType = () => (
  dispatch: (input: TodosActionTypes) => Promise<any>,
) => Promise<any>
export const fetchTodos: fetchTodosType = () => async (dispatch) => {
  const response = await fetchTodosApi()
  const responseJson = await response.json()
  return dispatch(fetchTodoSuccess(responseJson))
}
