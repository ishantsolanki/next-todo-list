import { ReduxState } from '../reducers/RootReducer'

export const getTodo = (state: ReduxState) => (id: string) => {
  return state.todos.list.find((todo) => todo.get('_id') === id)
}
