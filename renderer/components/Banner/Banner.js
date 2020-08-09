import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useText } from '../../theme/common';
import { withTranslation } from '../../i18n';
import useStyles from './banner-style';

function Banner(props) {
  const router = useRouter();
  const classes = useStyles();
  const text = useText();
  const elem = useRef(null);
  const signInState = useSelector(state => state.main.authReducer.state);

  const { t } = props;
  // const theme = useTheme();

  const [hide, setHide] = useState(false);

  // const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }
    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;
    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleSetting = () => {
    if (signInState === '') {
      router.push('/login');
    } else {
      router.push({
        pathname: '/setting',
      });
    }
  };

  const handleCheckRequests = () => {
    if (signInState === '') {
      router.push('/login');
    } else {
      router.push({
        pathname: '/check-request',
      });
    }
  };

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.canvasWrap}>
        <div className={classes.overlay}>
          <div className={clsx(classes.decoInner, hide && classes.hide)}>
            <div id="particles_backgrond" className={classes.particleBackground} />
          </div>
        </div>
      </div>
      <Container fixed>
        <div className={classes.bannerWrap}>
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={8}>
              <div className={classes.text}>
                <Typography variant="h4" className={text.title2}>
                  {t('crypto-landing:banner_title')}
                </Typography>
                <Typography component="p" className={text.subtitle2}>
                  {t('crypto-landing:banner_subtitle')}
                </Typography>
              </div>
              <div className={classes.btnArea}>
                <Button variant="contained" onClick={handleCheckRequests} color="secondary" size="large">
                  {t('crypto-landing:check_requests')}
                </Button>
                <Button variant="outlined" onClick={handleSetting} className={classes.invert} size="large">
                  {t('crypto-landing:setting')}
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <figure className={classes.objectArt}>
                <img src="/static/images/crypto/banner-art.png" alt="illustration" />
              </figure>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className={classes.decoBottom}>
        <svg>
          <use xlinkHref="/static/images/crypto/deco-banner.svg#main" />
        </svg>
      </div>
    </div>
  );
}

Banner.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common', 'crypto-landing'])(Banner);
