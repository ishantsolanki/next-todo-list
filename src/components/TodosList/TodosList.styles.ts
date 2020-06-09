import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    Grid: {
      margin: theme.spacing(2,5)
    },
    CreateNewButton: {
      border: '1px dashed gray'
    }
  }),
)

export default useStyles
