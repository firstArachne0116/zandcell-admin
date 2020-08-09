import { makeStyles } from '@material-ui/core/styles';

const pagenav = makeStyles(theme => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    borderRadius: 10,
    background: theme.palette.secondary.dark,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.common.white,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light,
      },
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    '&$show': {
      '& $fab': {
        opacity: 1,
        transform: 'scale(1)',
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.common.white,
        border: `1px solid ${theme.palette.primary.dark}`,
        opacity: 0.3,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: 3,
      },
      '&[class="active"] a': {
        opacity: 1,
        background: theme.palette.primary.dark,
        border: `1px solid ${theme.palette.primary.light}`,
      },
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important',
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14,
  },
}));

export default pagenav;
