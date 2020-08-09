import { makeStyles } from '@material-ui/core/styles';
import { fade, lighten, darken } from '@material-ui/core/styles/colorManipulator';

const footerStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  invert: {},
  footer: {
    position: 'relative',
    padding: theme.spacing(10, 0),
    '& p': {
      color: theme.palette.common.white,
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      },
    },
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      display: 'inline-block',
      width: '30%',
      marginRight: '3%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.common.white,
      [theme.breakpoints.down('xs')]: {
        width: '47%'
      },
      '& a': {
        fontSize: 14,
        textTransform: 'capitalize',
        textDecoration: 'none !important',
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.primary.light
        }
      }
    },
    '&$invert': {
      '& p': {
        color: theme.palette.text.primary
      },
      '& li a': {
        color: theme.palette.text.primary
      },
      '& $logo': {
        '& h6': {
          color: theme.palette.primary.dark
        }
      },
      '& $title': {
        color: theme.palette.secondary.main
      },
      '& $blogItem': {
        '& $category': {
          color: theme.palette.secondary.main
        }
      },
      '& $selectLang': {
        color: theme.palette.text.primary,
        '& svg': {
          color: theme.palette.text.primary,
        },
      }
    }
  },
  title: {
    color: theme.palette.secondary.light,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
  },
  quickLinks: {
    marginTop: theme.spacing(5)
  },
  logo: {
    display: 'flex',
    marginBottom: theme.spacing(3),
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    '& img': {
      width: 64,
      marginRight: theme.spacing(),
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 28,
      textTransform: 'uppercase',
      color: theme.palette.common.white,
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
  },
  socmed: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      background: theme.palette.primary.main,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.common.white,
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {},
  selectLang: {
    display: 'inherit',
    margin: theme.spacing(2, 0, 4),
    color: theme.palette.common.white,
    '& $icon': {
      top: 29,
      color: theme.palette.primary.light,
      position: 'relative',
    },
    '& svg': {
      color: theme.palette.secondary.light,
    },
    '& fieldset': {
      borderRadius: 10,
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${fade(theme.palette.primary.light, 0.5)} !important`,
      '& legend': {
        top: 5,
        position: 'relative',
        borderTop: `1px solid ${fade(theme.palette.primary.light, 0.5)}`
      },
      '& + div + div': {
        background: 'none !important',
        padding: theme.spacing(1.5, 1.5, 1.5, 4),
        width: 'calc(100% - 32px)',
      }
    }
  },
  footerCounter: {
    position: 'relative',
    background: `linear-gradient(-130deg, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} -20%, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 70%)`,
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(25),
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(15),
    }
  },
  decoTop: {
    position: 'absolute',
    top: -2,
    left: 0,
    width: 1280,
    height: 400,
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.1)'
    },
    [theme.breakpoints.up(1400)]: {
      transform: 'scale(2, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      transform: 'scale(1.4, 1)',
      left: -300
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& svg': {
      width: '100%',
      height: '100%',
      fill: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.6) : lighten(theme.palette.primary.main, 0.84),
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
  category: {},
  listText: {},
  blogItem: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    textAlign: 'left',
    justifyContent: 'flex-start',
    '& $category': {
      marginBottom: theme.spacing(),
      display: 'block',
      color: theme.palette.secondary.light
    },
    '& $listText': {
      flex: 1,
      color: theme.palette.primary.light
    },
    '& figure': {
      borderRadius: 4,
      overflow: 'hidden',
      margin: theme.spacing(1, 2, 0, 0),
      width: 80,
      height: 56,
      '& img': {
        display: 'block',
        minHeight: '100%',
        width: '100%',
      }
    },
    '& p': {
      fontSize: 13,
    }
  },
}));

export default footerStyles;
