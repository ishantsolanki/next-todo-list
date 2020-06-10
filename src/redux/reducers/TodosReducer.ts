import { List, Record } from 'immutable'

import { createReducer } from './utils'
import { todoTypes } from '../actions/todoActionTypes'
import { TodosType, TodosRecord, ChecklistItemRecord } from '../../types/Todos'

export interface TodosReducerType {
  list: List<Record<TodosType>>
}

export const initialState = {
  list: List(),
}

const fetchTodosSuccessReducer = (
  state: TodosReducerType,
  { response }: { response: TodosType[] },
) => ({
  ...state,
  list: List([
    ...response.map(
      (todo) =>
        new TodosRecord({
          _id: todo._id,
          title: todo.title,
          checklist: List([
            ...todo.checklist.map(
              (checklist) =>
                new ChecklistItemRecord({
                  _id: checklist._id,
                  content: checklist.content,
                  checked: checklist.checked,
                }),
            ),
          ]),
        }),
    ),
  ]),
})

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
  [todoTypes.FETCH_TODO_SUCCESS]: (
    state: TodosReducerType,
    action: { response: TodosType[] },
  ) => fetchTodosSuccessReducer(state, action),
  [todoTypes.UPDATE_TITLE_SUCCESS]: (
    state: TodosReducerType,
    action: { response: TodosType },
  ) => updateTitleReducer(state, action),
})

export default TodosReducer
