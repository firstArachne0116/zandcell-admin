import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import brand from '../../static/text/brand';
import { useText } from '../../theme/common';
import Parallax from '../Parallax/Hexagonal';
import Decoration from './Decoration';
import useStyles from './form-style';

function AuthFrame(props) {
  const classes = useStyles();
  const theme = useTheme();
  const text = useText();
  const { children, title, subtitle } = props;

  return (
    <div className={classes.pageWrap}>
      <div className={clsx(classes.deco, classes.lower)}>
        <Decoration />
      </div>
      <div className={clsx(classes.parallax, classes.parallaxLeft)}>
        <Parallax />
      </div>
      <div className={clsx(classes.parallax, classes.parallaxRight)}>
        <Parallax />
      </div>

      <Container maxWidth="lg" className={classes.innerWrap}>
        <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
          {/* <IconButton href={routerLink.crypto.home} className={classes.backtohome}>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-thin-left" />
          </IconButton> */}
          <div className={clsx(classes.decoInner)}>
            <Decoration />
          </div>
          <div className={classes.authFrame}>
            <Grid container spacing={0}>
              <Grid item md={5} xs={12}>
                <Hidden smDown>
                  <div className={classes.greeting}>
                    <div className={classes.logo}>
                      {/* <img src={logo} alt="logo" /> */}
                      <Typography className={text.subtitle2}>
                        {brand.crypto.projectName}
                      </Typography>
                    </div>
                    <Typography gutterBottom variant="h4" className={text.title2}>
                      { title }
                    </Typography>
                    <Typography variant="h6" className={text.paragraph}>
                      { subtitle }
                    </Typography>
                    <div className={classes.decoSm}>
                      <svg width="55px" height="49px" viewBox="0 0 55 49" version="1.1">
                        <defs>
                          <linearGradient x1="34.4430017%" y1="14.3140713%" x2="131.062329%" y2="100%" id="linearGradient-sm">
                            <stop stopColor={theme.palette.secondary.main} offset="0%" />
                            <stop stopColor={theme.palette.secondary.light} offset="100%" />
                          </linearGradient>
                        </defs>
                        <g id="Auth-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <path d="M3.56921938,35.4705736 C3.56921938,37.4675408 4.62878153,39.3129133 6.34885575,40.3113968 L24.789583,51.0165091 C26.5096572,52.0149927 28.6287815,52.0149927 30.3488557,51.0165091 L48.789583,40.3113968 C50.5096572,39.3129133 51.5692194,37.4675408 51.5692194,35.4705736 L51.5692194,14.0602595 C51.5692194,12.0632028 50.5096572,10.2179199 48.789583,9.21934677 L30.3488557,-1.4857655 C28.6287815,-2.48424909 26.5096572,-2.48424909 24.789583,-1.4857655 L6.34885575,9.21934677 C4.62878153,10.2179199 3.56921938,12.0632028 3.56921938,14.0602595 L3.56921938,35.4705736 Z" id="AuthFill-1" fill="url(#linearGradient-sm)" transform="translate(27.569219, 24.765372) rotate(-330.000000) translate(-27.569219, -24.765372) " />
                        </g>
                      </svg>
                    </div>
                  </div>
                </Hidden>
              </Grid>
              <Grid item md={7} xs={12}>
                <div className={classes.formWrap}>
                  {children}
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

AuthFrame.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

AuthFrame.defaultProps = {
  subtitle: '',
};

export default AuthFrame;
