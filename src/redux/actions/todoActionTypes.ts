import { TodosType } from '../../types/Todos'

export enum todoTypes {
  FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
}

interface fetchTodosSuccessAction {
  type: typeof todoTypes.FETCH_TODO_SUCCESS
  response: TodosType[]
}

export type TodosActionTypes = fetchTodosSuccessAction
