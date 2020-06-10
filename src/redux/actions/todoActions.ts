import { createnewTodoApi, fetchTodosApi, updateTitleApi } from './api'
import { TodosType } from '../../types/Todos'
import { AnyAction } from 'redux'
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

type updateTitleSuccessType = (
  response: TodosType,
) => {
  type: todoTypes
  response: TodosType
}
export const updateTitleSuccess: updateTitleSuccessType = (response) => ({
  type: todoTypes.UPDATE_TITLE_SUCCESS,
  response,
})

type updateTitleType = ({
  _id,
  title,
}: {
  _id: string
  title: string
}) => (dispatch: (action: AnyAction) => Promise<any>) => void

export const updateTitle: updateTitleType = ({ _id, title }) => async (
  dispatch,
) => {
  const response = await updateTitleApi({ _id, title })
  const responseJson = await response.json()
  return dispatch(updateTitleSuccess(responseJson))
}
