import React from 'react'
import { Grid, Paper, Button } from '@material-ui/core'
import useStyles from './TodosList.styles'

export const TodosList = () => {
  const classes = useStyles()

  return (
    <div className={classes.Grid}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.Paper}>first list</Paper>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" className={classes.CreateNewButton}>Create new</Button>
        </Grid>
      </Grid>
    </div>
  )
}
export default TodosList
