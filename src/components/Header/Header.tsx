import React from 'react'
import useStyles from './Header.styles'

export const Header = () => {
  const classes = useStyles()
  return <div className={classes.header}>The Next Todo List</div>
}

export default Header
