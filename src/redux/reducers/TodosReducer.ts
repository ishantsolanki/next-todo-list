import { List, Record } from 'immutable'

import { createReducer } from './utils'
import { todoTypes } from '../actions/todoActionTypes'
import { TodosType } from '../../types/Todos'

export interface TodosReducerType {
  list: List<Record<TodosType>>
}

export const initialState = {
  list: List(),
}

const updateTitleReducer = (
  state: TodosReducerType,
  { response }: { response: TodosType },
) => {
  return {
    ...state,
    list: state.list.update(
      state.list.findIndex((item) => item.get('_id') === response._id),
      (e) => e.set('title', response.title),
    ),
  }
}

const TodosReducer = createReducer(initialState, {
  [todoTypes.UPDATE_TITLE_SUCCESS]: (
    state: TodosReducerType,
    action: { response: TodosType },
  ) => updateTitleReducer(state, action),
})

export default TodosReducer
