import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, useTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactWOW from 'react-wow';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withTranslation } from '../../i18n';
import { useText } from '../../theme/common';
import Title from '../Title';
import useStyles from './feature-style';

const coinData = [
  {
    name: 'BTC',
    logo: '/static/images/crypto/btc.png',
    progress: 75,
    color: '#FBA630'
  },
  {
    name: 'DASH',
    logo: '/static/images/crypto/dash.png',
    progress: 40,
    color: '#21D3D7'
  },
  {
    name: 'NAN',
    logo: '/static/images/crypto/nan.png',
    progress: 90,
    color: '#548CCC'
  },
  {
    name: 'MNR',
    logo: '/static/images/crypto/mnr.png',
    progress: 35,
    color: '#FF6602'
  },
  {
    name: 'IOT',
    logo: '/static/images/crypto/iot.png',
    progress: 80,
    color: '#CE07D4'
  }
];

function MoreFeature(props) {
  const classes = useStyles();
  const text = useText();
  const [play, setPlay] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = props;
  const themeProgress = color => createMuiTheme({
    palette: {
      primary: {
        main: color
      }
    }
  });
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 200);
  };

  return (
    <div className={classes.moreFeature}>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={6} alignItems="center">
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, isMobile && classes.center)}>
                <span className="ion-ios-locked-outline" />
                <Title text={t('crypto-landing:morefeature_title1')} align={isMobile ? 'center' : 'left'} />
                <Typography className={text.subtitle2} display="block" align={isMobile ? 'center' : 'left'}>
                  {t('crypto-landing:morefeature_subtitle1')}
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ReactWOW animation="fadeInLeftShort" delay="0.3s" duration="0.3s">
                <figure className={classes.illustration}>
                  <img src="/static/images/crypto/illustration1.png" alt="feature" />
                </figure>
              </ReactWOW>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid
            container
            direction={isMobile ? 'column-reverse' : 'row'}
            spacing={6}
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              <ReactWOW animation="fadeInRightShort" offset={-100} delay="0.3s" duration="0.3s">
                <figure className={classes.illustration}>
                  <img src="/static/images/crypto/illustration2.png" alt="feature" />
                </figure>
              </ReactWOW>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, isMobile && classes.center)}>
                <span className="ion-ios-analytics-outline" />
                <Title text={t('crypto-landing:morefeature_title2')} align={isMobile ? 'center' : 'left'} />
                <Typography className={text.subtitle2} display="block" align={isMobile ? 'center' : 'left'}>
                  {t('crypto-landing:morefeature_subtitle2')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container>
            <Grid item sm={12}>
              <div className={clsx(classes.text, classes.center)}>
                <span className="ion-ios-bolt-outline" />
                <Title className={text.subtitle2} text={t('crypto-landing:morefeature_title3')} align="center" />
                <Typography display="block" align="center" className={text.subtitle2}>
                  {t('crypto-landing:morefeature_subtitle3')}
                </Typography>
              </div>
              <Container maxWidth="md">
                <ReactWOW animation="fadeIn" offset={-100} duration="0s" callback={handlePlay}>
                  <ul className={classes.progressWrap}>
                    {coinData.map((item, index) => (
                      <li key={index.toString()}>
                        <div className={classes.coin}>
                          <Avatar className={classes.logo} src={item.logo} alt={item.name} />
                          <Typography variant="h5">
                            {item.name}
                          </Typography>
                        </div>
                        <div className={classes.progress}>
                          <div className={classes.unit}>
                            <Typography variant="h6">
                              <span>USD</span>
                              &nbsp;5.000
                            </Typography>
                            <Typography variant="h6">
                              <span>USD</span>
                              &nbsp;15.000
                            </Typography>
                          </div>
                          <ThemeProvider theme={themeProgress(item.color)}>
                            <LinearProgress
                              variant="determinate"
                              value={play ? item.progress : 0}
                              classes={{
                                root: classes.track,
                                bar: classes.bar
                              }}
                            />
                          </ThemeProvider>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ReactWOW>
              </Container>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

MoreFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(MoreFeature);
