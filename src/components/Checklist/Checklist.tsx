import React from 'react'
import { Record } from 'immutable'

import { connect } from 'react-redux'

import { TodosType } from '../../types/Todos'
import { ReduxState } from '../../redux/reducers/RootReducer'
import { getTodo } from '../../redux/selectors/todos'

export const mapStateToProps = (state: ReduxState, { id }: { id: string }) => ({
  todo: getTodo(state)(id),
})

interface Props {
  todo: Record<TodosType> | undefined
}

export const Checklist: React.FC<Props> = ({ todo }) => {
  return <div>{todo && <>"title: " {todo.get('title')}</>}</div>
}

export default connect(mapStateToProps)(Checklist)
