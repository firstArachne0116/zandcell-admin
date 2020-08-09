import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  mainFeature: {
    position: 'relative',
    display: 'block',
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(8),
    }
  },
  video: {
    overflow: 'hidden',
    position: 'relative',
    margin: theme.spacing(6, 0, 2),
    '& figure': {
      margin: 0,
      background: theme.palette.common.black,
      '& img': {
        opacity: 0.62,
        minHeight: '100%',
        width: '100%',
      }
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  featureWrap: {
    position: 'relative'
  },
  playBtn: {
    position: 'absolute',
    width: 150,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& span': {
      '&:before': {
        fontSize: 130,
        background: `linear-gradient(120deg, ${theme.palette.secondary.light}, ${theme.palette.primary.light})`,
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
      }
    }
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  },
  deco: {
    position: 'absolute',
    top: 80,
    left: 80,
    width: 400,
    '& svg': {
      transformOrigin: 'top left',
    }
  },
  counter: {
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('sm')]: {
      paddingRight: theme.spacing(8),
    },
    '& > *': {
      [theme.breakpoints.down('xs')]: {
        width: '50%',
        padding: theme.spacing(0.5)
      }
    }
  },
  lower: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(20)
    }
  },
  higher: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10)
    }
  },
  paper: {
    position: 'relative',
    height: 174,
    padding: theme.spacing(2),
    margin: theme.spacing(1, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1, 3),
      margin: theme.spacing(4, 4, 0, 0),
      width: 174,
    },
    '& span': {
      color: theme.palette.primary.main,
      fontSize: 48
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      fontSize: 18,
      [theme.breakpoints.down('xs')]: {
        fontSize: 16
      }
    }
  },
  moreFeature: {
    position: 'relative',
    '& figure': {
      margin: 0
    }
  },
  chartDeco: {
    width: '100%',
    height: 420,
    bottom: 0,
    position: 'absolute',
    backgroundSize: 'cover',
  },
  item: {
    position: 'relative',
    paddingTop: theme.spacing(10),
  },
  text: {
    position: 'relative',
    '& > span': {
      position: 'absolute',
      color: 'rgba(0, 0, 0, 0.54)',
      top: -10,
      left: 7,
      fontSize: 38,
      zIndex: 2,
    }
  },
  illustration: {
    '& img': {
      width: '80%',
      display: 'block',
      margin: '0 auto'
    }
  },
  center: {
    '& span': {
      left: 'calc(50% - 7px)'
    }
  },
  progressWrap: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 6),
    },
    padding: 0,
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
      '& h5': {
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('xs')]: {
          fontSize: 16
        },
      }
    }
  },
  logo: {},
  coin: {
    display: 'flex',
    alignItems: 'center',
    width: 120,
    paddingTop: theme.spacing(),
    '& $logo': {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        marginRight: theme.spacing(),
        width: 20,
        height: 20
      },
    },
  },
  progress: {
    flex: 1,
    marginTop: theme.spacing(),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(6),
    }
  },
  unit: {
    display: 'flex',
    justifyContent: 'space-between',
    '& h6': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 14,
      },
      '& span': {
        fontSize: 16,
        [theme.breakpoints.down('xs')]: {
          fontSize: 14,
        },
      }
    }
  },
  track: {
    background: theme.palette.divider,
    borderRadius: 10,
    height: '8px !important',
  },
  bar: {
    borderRadius: 10,
  },
}));

export default featureStyles;
