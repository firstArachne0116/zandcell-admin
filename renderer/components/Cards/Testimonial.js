import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import useStyles from './cards-style';

export default function Testimonial(props) {
  const classes = useStyles();
  const {
    text,
    name,
    title,
    avatar,
    active
  } = props;
  return (
    <div className={classes.testimonial}>
      <Paper className={clsx(classes.paper, active ? classes.active : '')}>
        <Avatar src={avatar} className={classes.avatar} alt="avatar" />
        <Typography className={classes.text} display="block">{text}</Typography>
        <Typography variant="caption" className={classes.caption}>
          {name}
          &nbsp;-&nbsp;
          {title}
        </Typography>
      </Paper>
    </div>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

Testimonial.defaultProps = {
  active: false
};
