import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme()

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
}

interface Props {
  children: React.ReactNode
}

const Themer: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Themer
