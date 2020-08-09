import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  counterWrap: {
    position: 'relative',
    textAlign: 'center',
    '& h3': {
      color: theme.palette.common.white,
    },
    '& p': {
      marginTop: theme.spacing(1.5),
      color: theme.palette.common.white
    }
  },
  callAction: {
    marginTop: theme.spacing(10),
    position: 'relative',
    textAlign: 'center',
    color: theme.palette.common.white,
  },
  button: {
    marginTop: theme.spacing(2),
  }
}));

export default counterStyles;
