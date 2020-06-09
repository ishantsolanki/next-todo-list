import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    App: {
      textAlign: 'center',
    },
    Divider: {
      border: '1px dashed lightgrey',
      margin: theme.spacing(1, 5),
    },
  }),
)

export default useStyles
