import React from 'react';
import MainFeature from './MainFeature';
import MoreFeature from './MoreFeature';
import useStyles from './feature-style';
import Parallax from '../Parallax/Hexagonal';

export default function Feature() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Parallax />
      <MainFeature />
      <MoreFeature />
    </div>
  );
}
