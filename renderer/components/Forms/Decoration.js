import React from 'react';
import useStyles from './form-style';

export default function Decoration() {
  const classes = useStyles();

  return (
    <div className={classes.deco}>
      <svg width="1274px" height="1018px" viewBox="0 0 1274 1018" version="1.1">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <mask fill="white">
            <use xlinkHref="#path-2" />
          </mask>
          <use fill="url(#frmDecoLinearGradient-1)" transform="translate(607.224351, 494.641126) rotate(-45.000000) translate(-607.224351, -494.641126) " xlinkHref="#path-2" />
        </g>
      </svg>
    </div>
  );
}
