import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
import decoBottomLight from '../../static/images/crypto/deco-bottom-light.svg';
import decoBottomDark from '../../static/images/crypto/deco-bottom-dark.svg';

const promotionStyles = makeStyles(theme => ({
  root: {
    background: `url(${theme.palette.type === 'dark' ? decoBottomDark : decoBottomLight}) bottom center no-repeat`,
    backgroundColor: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.6) : lighten(theme.palette.primary.main, 0.84),
    backgroundSize: '100%',
    position: 'relative',
    padding: theme.spacing(0, 3),
    backgroundPosition: 'center 101%',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(10, 3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0
    },
  },
  sliderWrap: {
    '& a[class*="previousButton"]': {
      right: 120,
      left: 'auto',
      top: 200,
      [theme.breakpoints.down('md')]: {
        right: 20
      }
    },
    '& a[class*="nextButton"]': {
      left: 'auto',
      top: 140,
      right: 120,
      [theme.breakpoints.down('md')]: {
        right: 20
      }
    },
    '& > div': {
      height: 500,
      [theme.breakpoints.down('sm')]: {
        height: 320
      },
      '& > a': {
        background: theme.palette.background.paper,
        borderRadius: '50%',
        width: 40,
        height: 40,
        transition: 'all 0.3s ease',
        position: 'absolute',
        zIndex: 11,
        boxShadow: theme.shadows[2],
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        },
        '&:hover': {
          backgroundImage: 'none'
        },
        '& svg': {
          width: 35,
          height: 35,
          position: 'absolute',
          left: 3,
          top: 3,
          fill: theme.palette.text.secondary
        }
      }
    }
  },
  paper: {},
  time: {},
  even: {
    '& h1': {
      color: theme.palette.secondary.main,
    },
    '& $decoration': {
      '& svg': {
        fill: theme.palette.secondary.main
      }
    }
  },
  odd: {
    '& h1': {
      color: theme.palette.primary.main,
    },
    '& $decoration': {
      '& svg': {
        fill: theme.palette.primary.main
      }
    }
  },
  hexa: {},
  item: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(0, 1),
    maxHeight: 500,
    zIndex: 10,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(8),
    },
    '& svg': {
      width: 450,
      height: 450
    },
    '& section': {
      position: 'relative',
      zIndex: 10,
      opacity: 0,
      transform: 'translateX(40px)',
      transition: 'all 0.5s ease',
    },
    '&[class*="current"]': {
      '& section': {
        transform: 'translateX(0px)',
        opacity: 1
      },
    },
    '& figure': {
      margin: '20px auto',
      transform: 'scale(0.7)',
      lineHeight: '200px',
      textAlign: 'center',
      left: 29,
      position: 'relative',
      top: -14,
      transition: 'none !important',
      '& img': {
        transition: 'none',
        verticalAlign: 'middle',
        width: 350,
        height: 393,
        opacity: '0.5 !important',
      }
    },
    '& $paper': {
      position: 'relative',
      padding: theme.spacing(9, 6, 9, 16),
      borderRadius: 24,
      [theme.breakpoints.up('lg')]: {
        left: -80,
      },
      [theme.breakpoints.up('md')]: {
        marginTop: 60,
      },
      [theme.breakpoints.down('md')]: {
        width: 'calc(100% - 80px)',
      },
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(6),
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        padding: theme.spacing(2),
      },
      '& button': {
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
          justifyContent: 'center',
        }
      }
    },
    '& h1': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
      lineHeight: '42px',
      maxWidth: 500,
      '& button': {
        textAlign: 'left',
        fontSize: 36,
        fontFamily: 'Montserrat',
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('md')]: {
          width: '100%',
          fontSize: 28,
          lineHeight: '36px',
          textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: 20,
          lineHeight: '28px',
        }
      },
      [theme.breakpoints.down('xs')]: {
        whiteSpace: 'normal',
        lineHeight: '32px'
      },
    },
    '& p': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        fontSize: 14,
      }
    },
    '& $time': {
      '& h6': {
        fontSize: 14,
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    },
    '&:before': {
      display: 'none'
    }
  },
  decoration: {
    position: 'absolute',
    top: -60,
    left: 0,
  },
  shadow: {
    position: 'absolute',
    transition: 'none !important',
    top: -40,
    left: 0,
    '& svg': {
      transform: 'scale(1.1) !important'
    }
  }
}));

export default promotionStyles;
