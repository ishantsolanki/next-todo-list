import { combineReducers } from 'redux'

import TodosReducer, { TodosReducerType } from './TodosReducer'

export interface ReduxState {
  todos: TodosReducerType
}

export default combineReducers({
  todos: TodosReducer,
})
