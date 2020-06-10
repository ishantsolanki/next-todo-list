import React, { useEffect } from 'react'
import { List, Record } from 'immutable'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { createNewTodo, fetchTodos } from '../../redux/actions/todoActions'
import { TodosType } from '../../types/Todos'
import { ReduxState } from '../../redux/reducers/RootReducer'
import { Grid, Paper, Button } from '@material-ui/core'
import useStyles from './TodosList.styles'

const mapStateToProps = (state: ReduxState) => ({
  todos: state.todos.list,
})
const mapDispatchToProps = {
  createNewTodoBound: createNewTodo,
  fetchTodosBound: fetchTodos,
}

interface Props {
  createNewTodoBound: () => Promise<any>
  fetchTodosBound: () => void
  todos: List<Record<TodosType>>
}

export const TodosList: React.FC<Props> = ({
  createNewTodoBound,
  fetchTodosBound,
  todos,
}) => {
  const classes = useStyles()
  const history = useHistory()
  const onCreateNew = () => {
    createNewTodoBound().then((newTodo: { _id: string }) => {
      history.push(`/todos/${newTodo._id}`)
    })
  }

  const handleItemClick = (id: string) => () => {
    history.push(`/todos/${id}`)
  }

  useEffect(() => {
    fetchTodosBound()
  }, [fetchTodosBound])

  return (
    <div className={classes.Grid}>
      <Grid container spacing={3}>
        {todos &&
          todos.map((todo) => (
            <Grid item xs={12} key={todo.get('_id')}>
              <Paper
                className={classes.Paper}
                onClick={handleItemClick(todo.get('_id'))}
              >
                {todo.get('title')}
              </Paper>
            </Grid>
          ))}

        <Grid item xs={12}>
          <Button
            variant="outlined"
            className={classes.CreateNewButton}
            onClick={onCreateNew}
          >
            Create new
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
