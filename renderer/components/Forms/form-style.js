import { makeStyles } from '@material-ui/core/styles';
import { fade, darken } from '@material-ui/core/styles/colorManipulator';

const contactStyles = makeStyles(theme => ({
  title: {},
  pageWrap: {
    padding: theme.spacing(11, 5),
    position: 'relative',
    textAlign: 'center',
    overflow: 'hidden',
    background: theme.palette.background.default,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 0),
    },
    '& $title': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      [theme.breakpoints.down('xs')]: {
        fontSize: 32
      }
    },
    '& a': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  frmDeco: {},
  innerWrap: {
    textAlign: 'left',
  },
  fullFromWrap: {
    background: theme.palette.background.paper,
    padding: theme.spacing(9, 0),
  },
  formBox: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.4) : theme.palette.primary.light,
    boxShadow: '0 0 12px 2px rgba(0, 0, 0, 0.05)',
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
    padding: theme.spacing(0, 12),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 5)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2),
      fontSize: 16
    }
  },
  light: {},
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5),
    },
    '& > div': {
      overflow: 'hidden',
      background: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
      '&:hover': {
        background: darken(theme.palette.background.paper, 0.1)
      },
      '& input, textarea': {
        paddingLeft: theme.spacing(2),
        '&:focus': {
          background: theme.palette.background.default
        },
      }
    },
    '&$light': {
      '& label': {
        color: theme.palette.common.white,
      },
      '& > div': {
        border: `1px solid ${fade(theme.palette.primary.light, 0.5)}`,
        '& input': {
          color: theme.palette.common.white,
          '&:focus': {
            background: fade(theme.palette.text.hint, 0.2)
          },
          '&:hover': {
            background: fade(theme.palette.text.hint, 0.2)
          }
        },
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    padding: theme.spacing(0, 15, 10),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 6, 10),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2, 10),
    },
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    },
  },
  formControl: {
    minWidth: 80,
    width: '100%',
  },
  requestStatusSelect: {
    minWidth: 80,
    maxWidth: 150,
    padding: 4,
    marginLeft: 20,
    marginRight: 20
  },
  flex: {},
  btnArea: {
    marginTop: theme.spacing(5),
    '& button': {
      marginTop: theme.spacing(2)
    },
    '& span': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 14
      },
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      }
    },
    '&$flex': {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        display: 'block'
      }
    },
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  invert: {},
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    '&$invert': {
      '& i': {
        color: theme.palette.text.secondary
      }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: theme.palette.common.white
    },
    '& > span i:first-child': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-child': {
        opacity: 0,
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1,
      },
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  authFrame: {
    display: 'block',
    position: 'relative',
  },
  greeting: {
    padding: theme.spacing(15, 6),
    height: '100%',
    '& h4': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
    },
    '& h6': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightMedium,
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: 24,
      paddingBottom: 4,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      justifyContent: 'center',
      '& a': {
        display: 'none'
      }
    }
  },
  signArrow: {},
  formWrap: {
    minHeight: 600,
    background: theme.palette.background.paper,
    position: 'relative',
    paddingBottom: theme.spacing(10),
    overflow: 'hidden',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(8)
    },
    '& $frmDeco': {
      left: '58.333333%',
      transform: 'translateX(-72%)',
      bottom: '-75px'
    },
  },
  socmedSideLogin: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      display: 'block'
    },
    '& > *': {
      color: theme.palette.common.white,
      width: 160,
      padding: theme.spacing(),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(0, 0.5)
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(2),
        width: '100%',
      }
    },
    '& i': {
      color: theme.palette.common.white,
      marginRight: theme.spacing()
    }
  },
  blueBtn: {
    background: '#28aae1',
    '&:hover': {
      background: darken('#28aae1', 0.2),
    }
  },
  naviBtn: {
    background: '#3b579d',
    '&:hover': {
      background: darken('#3b579d', 0.2),
    }
  },
  redBtn: {
    background: '#dd493c',
    '&:hover': {
      background: darken('#dd493c', 0.2),
    }
  },
  separator: {
    margin: `${theme.spacing(5)}px auto`,
    maxWidth: 340,
    minWidth: 256,
    textAlign: 'center',
    position: 'relative',
    '& p': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 12
      },
    },
    '&:before, &:after': {
      content: '""',
      borderTop: `1px solid ${theme.palette.text.hint}`,
      top: '50%',
      position: 'absolute',
      width: '20%'
    },
    '&:before': {
      left: 0,
    },
    '&:after': {
      right: 0,
    }
  },
  lower: {},
  deco: {
    width: '100%',
    height: '150%',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    top: -300,
    transform: 'scale(1.1)',
    transformOrigin: 'center',
    [theme.breakpoints.down('xs')]: {
      '& svg': {
        left: '-150%',
        position: 'relative',
      }
    },
    '&$lower': {
      top: -150,
    },
  },
  parallax: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    top: 0,
  },
  parallaxLeft: {
    '& > div': {
      top: -1500,
    }
  },
  parallaxRight: {
    '& > div': {
      top: -400,
    }
  },
  decoInner: {
    width: '100%',
    height: '150%',
    position: 'absolute',
    overflow: 'hidden',
    left: -114,
    top: -300,
    transform: 'scale(1.1)',
    transformOrigin: 'center',
    '& $deco': {
      [theme.breakpoints.up(1281)]: {
        left: 50
      },
    }
  },
  decoSm: {
    textAlign: 'center',
    marginTop: theme.spacing(10)
  },
  tableRoot: {
    width: '98%',
    margin: 'auto'
  },
  tableContainer: {
    maxHeight: 440,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  tabContainer: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  fileList: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  listBorder: {
    width: 200
  }
}));

export default contactStyles;
