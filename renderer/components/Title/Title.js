import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import useStyles from './title-style';

export default function Title(props) {
  const classes = useStyles();
  const {
    text,
    align,
  } = props;
  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;
      case 'right':
        return classes.right;
      case 'center':
        return classes.center;
      default:
        return classes.left;
    }
  };
  return (
    <div className={clsx(classes.title, setAlign(align))}>
      <div className={classes.deco}>
        <svg width="38px" height="43px" viewBox="0 0 38 43" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path d="M0,30.0245126 C0,31.6146901 0.838820037,33.0841534 2.20054545,33.8792422 L16.7994545,42.4036834 C18.16118,43.1987722 19.83882,43.1987722 21.2005455,42.4036834 L35.7994545,33.8792422 C37.16118,33.0841534 38,31.6146901 38,30.0245126 L38,12.9755587 C38,11.3853099 37.16118,9.91591793 35.7994545,9.12075784 L21.2005455,0.596316588 C19.83882,-0.198772196 18.16118,-0.198772196 16.7994545,0.596316588 L2.20054545,9.12075784 C0.838820037,9.91591793 0,11.3853099 0,12.9755587 L0,30.0245126 Z" fill="url(#titleLinearGradient-1)" />
          </g>
        </svg>
      </div>
      <Typography variant="h4">
        {text}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  align: PropTypes.string,
};

Title.defaultProps = {
  align: 'left',
};
