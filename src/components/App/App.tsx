import React from 'react'
import useStyles from './App.styles'
import { Route } from 'react-router-dom'

import ThemeProvider from '../ThemeProvider/ThemeProvider'
import Header from '../Header/Header'
import TodosList from '../TodosList/TodosList'
import Checklist from '../Checklist/Checklist'

export const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider>
      <div className={classes.App}>
        <Header />
        <hr className={classes.Divider} />
        <Route exact path="/">
          <TodosList />
        </Route>
        <Route path="/todos/:todoId">
          <Checklist />
        </Route>
      </div>
    </ThemeProvider>
  )
}

export default App
