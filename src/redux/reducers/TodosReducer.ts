import { List, Record } from 'immutable'

import { createReducer } from './utils'
import { TodosType } from '../../types/Todos'

export interface TodosReducerType {
  todos: List<Record<TodosType>>
}

export const initialState = {
  todos: List(),
}

const TodosReducer = createReducer(initialState, {})

export default TodosReducer
