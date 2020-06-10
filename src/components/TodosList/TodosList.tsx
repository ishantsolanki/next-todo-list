import React from 'react'
import { List, Record } from 'immutable'
import { connect } from 'react-redux'
import useSWR from 'swr'
import { useHistory } from 'react-router-dom'

import { API_ENDPOINT, fetchTodosApi } from '../../redux/actions/api'

import { createNewTodo } from '../../redux/actions/todoActions'
import { TodosType } from '../../types/Todos'
import { ReduxState } from '../../redux/reducers/RootReducer'
import { Grid, Paper, Button } from '@material-ui/core'
import useStyles from './TodosList.styles'

const mapStateToProps = (state: ReduxState) => ({
  todos: state.todos.list,
})
const mapDispatchToProps = {
  createNewTodoBound: createNewTodo,
}

interface Props {
  createNewTodoBound: () => Promise<any>
  todos: List<Record<TodosType>>
}

export const TodosList: React.FC<Props> = ({ createNewTodoBound }) => {
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

  const response: { data?: TodosType[] } = useSWR(
    `${API_ENDPOINT}/fetchTodos`,
    fetchTodosApi,
  )

  return (
    <div className={classes.Grid}>
      <Grid container spacing={3}>
        {response.data &&
          response.data.map((todo) => (
            <Grid item xs={12} key={todo._id}>
              <Paper
                className={classes.Paper}
                onClick={handleItemClick(todo._id)}
              >
                {todo.title}
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
