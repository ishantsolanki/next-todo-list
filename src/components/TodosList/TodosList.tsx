import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { createNewTodo } from '../../redux/actions/todoActions'
import { Grid, Paper, Button } from '@material-ui/core'
import useStyles from './TodosList.styles'

export const mapDispatchToProps = {
  createNewTodoBound: createNewTodo,
}

interface Props {
  createNewTodoBound: () => Promise<any>
}

export const TodosList: React.FC<Props> = ({ createNewTodoBound }) => {
  const classes = useStyles()
  const history = useHistory()

  const onCreateNew = () => {
    createNewTodoBound().then((newTodo: { _id: string}) => {
      history.push(`/todos/${newTodo._id}`)
    })
  }

  return (
    <div className={classes.Grid}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.Paper}>first list</Paper>
        </Grid>
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
export default connect(null, mapDispatchToProps)(TodosList)
