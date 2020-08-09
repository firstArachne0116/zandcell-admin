import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import hexaBg from '../../static/images/crypto/hexa-nav.png';

const testiStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(20)
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: 200
    }
  },
  carousel: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 2),
    },
    '& > div': {
      zIndex: 10
    },
    '&:after, &:before': {
      content: '""',
      borderRadius: 12,
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      height: 150,
      position: 'absolute',
    },
    '&:after': {
      width: '90%',
      bottom: 5,
      left: '50%',
      transform: 'translate(-50%, 0)'
    },
    '&:before': {
      width: '80%',
      bottom: -15,
      left: '50%',
      transform: 'translate(-50%, 0)'
    },
    '& > button': {
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
  item: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(7, 1, 0),
    },
    '&:focus': {
      outline: 'none'
    }
  },
  slideContent: {
    animationDuration: '1s',
    animationFillMode: 'both'
  },
  slide: {
    background: 'none'
  },
  future: {
    '& $slideContent': {
      animation: 'fadeInUp',
      animationDuration: '1s',
      animationDelay: '0.1s',
      animationFillMode: 'both'
    }
  },
  past: {
    '& $slideContent': {
      animation: 'fadeOutUp',
      animationDuration: '1s',
      animationFillMode: 'both'
    }
  },
  nav: {
    position: 'absolute',
    border: 'none',
    zIndex: 12,
    top: '48%',
    width: 50,
    height: 64,
    padding: 0,
    minWidth: 0,
    background: `url(${hexaBg}) no-repeat center`,
    backgroundSize: '100%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)',
    '& i': {
      color: fade(theme.palette.text.secondary, 0.33),
      position: 'relative',
      fontSize: 26,
    },
    '&:focus': {
      outline: 'none'
    },
    '&:hover': {
      opacity: 0.6
    }
  },
  prev: {
    left: 56,
    '& svg': {
      right: 2,
      marginTop: 3
    }
  },
  next: {
    right: 56,
    '& svg': {
      left: 2,
      marginTop: 3
    }
  },
  active: {},
  pagination: {
    zIndex: 22,
    position: 'relative',
    '& ul': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      padding: 0,
      margin: 0,
      listStyle: 'none',
      textAlign: 'center',
      bottom: theme.spacing(-12),
      '& li': {
        position: 'relative',
        display: 'inline-block',
        width: 15,
        height: 15,
        margin: '0 5px',
        padding: 0,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        transition: 'all 0.5s ease-out',
        '&$active': {
          background: theme.palette.primary.main
        },
        '&:hover': {
          opacity: 0.5
        },
        '& button': {
          opacity: 0,
          cursor: 'pointer',
          padding: 0,
          width: '100%',
          height: '100%'
        }
      },
    }
  }
}));

export default testiStyles;
