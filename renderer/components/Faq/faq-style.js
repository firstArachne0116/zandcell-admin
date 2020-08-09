import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
import decoFaqLight from '../../static/images/crypto/deco-faq-top-light.svg';
import decoFaqDark from '../../static/images/crypto/deco-faq-top-dark.svg';

const faqStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    background: `url(${theme.palette.type === 'dark' ? decoFaqDark : decoFaqLight}) top center no-repeat`,
    backgroundColor: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.6) : lighten(theme.palette.primary.main, 0.84),
    backgroundSize: '100%',
    marginTop: theme.spacing(-20),
    [theme.breakpoints.up('xl')]: {
      paddingBottom: theme.spacing(15),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(30, 0, 0),
    },
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(10),
    }
  },
  content: {
    '& $icon': {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(1)
    }
  },
  parallax: {
    position: 'absolute',
    top: -1300,
    width: '100%',
    left: 0
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6),
    '& img': {
      display: 'block',
      width: 300,
      margin: '0 auto'
    }
  },
  accordion: {
    position: 'relative',
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden',
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    }
  },
  expanded: {
    background: theme.palette.primary.main,
    '& $heading': {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    '& $icon': {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      [theme.breakpoints.up('sm')]: {
        fontSize: 18
      }
    }
  },
  icon: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
}));

export default faqStyles;
