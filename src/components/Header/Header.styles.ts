import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      ...theme.typography.h3,
      paddingTop: theme.spacing(5),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.primary.main,
      textShadow: `1px 1px 3px ${theme.palette.primary.main}`,
    },
  }),
)

export default useStyles
