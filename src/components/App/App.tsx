import React from 'react'
import Header from '../Header/Header'
import useStyles from './App.styles'
import ThemeProvider from '../ThemeProvider/ThemeProvider'

export const App = () => {
  const classes = useStyles()
  return (
    <ThemeProvider>
      <div className={classes.App}>
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
