import React from 'react'
import useStyles from './App.styles'

import ThemeProvider from '../ThemeProvider/ThemeProvider'
import Header from '../Header/Header'
import TodosList from '../TodosList/TodosList'

export const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider>
      <div className={classes.App}>
        <Header />
        <hr className={classes.Divider} />
        <TodosList />
      </div>
    </ThemeProvider>
  )
}

export default App
