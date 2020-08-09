import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import ButtonBase from '@material-ui/core/ButtonBase';
import NextIcon from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import useStyles from './promotion-style';
import '../../vendors/animate-slider.css';
import imgAPI from '../../static/images/imgAPI';
import { withTranslation } from '../../i18n';

const sliderData = [
  {
    image: imgAPI.crypto[0],
    title: 'Sed imperdiet enim ligula',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.crypto[1],
    title: 'Fusce placerat enim et odio',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.crypto[2],
    title: 'Pellentesque ac bibendum tortor',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: imgAPI.crypto[3],
    title: 'Pellentesque ac bibendum tortor',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  }
];

function Promotion(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = props;
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <div className={classes.sliderWrap}>
          <Slider
            className="slider-wrapper"
            previousButton={(
              <NextIcon />
            )}
            nextButton={(
              <NextIcon />
            )}
          >
            {sliderData.map((item, index) => (
              <div className={clsx(classes.item, index % 2 === 1 ? classes.odd : classes.even)} key={index.toString()}>
                <Grid container>
                  <Grid item xs={12} lg={4}>
                    <Hidden mdDown>
                      <section>
                        <div className={classes.shadow}>
                          <svg width="448px" height="485px" viewBox="0 0 448 485" version="1.1">
                            <defs>
                              <path d="M49,165.11031 L49,320.298789 C49,334.773416 56.725974,348.149238 69.2681818,355.386551 L203.731818,432.980466 C216.274026,440.217779 231.725974,440.217779 244.268182,432.980466 L378.731818,355.386551 C391.274026,348.149238 399,334.773416 399,320.298789 L399,165.11031 C399,150.635035 391.274026,137.259862 378.731818,130.0219 L244.268182,52.4279849 C231.725974,45.1906717 216.274026,45.1906717 203.731818,52.4279849 L69.2681818,130.0219 C56.725974,137.259862 49,150.635035 49,165.11031" id="path-1" />
                              <filter x="-20.1%" y="-18.0%" width="140.3%" height="136.0%" filterUnits="objectBoundingBox" id="filter-2">
                                <feMorphology radius="1" operator="erode" in="SourceAlpha" result="shadowSpreadOuter1" />
                                <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                                <feGaussianBlur stdDeviation="24.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
                                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.19 0" type="matrix" in="shadowBlurOuter1" />
                              </filter>
                            </defs>
                            <g id="Promo-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="PromoFill-1">
                                <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1" />
                                <use id="main" fillRule="evenodd" xlinkHref="#path-1" />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className={classes.decoration}>
                          <svg>
                            <use xlinkHref="/static/images/crypto/deco-promo.svg#main" />
                          </svg>
                        </div>
                        <figure className={classes.image}>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </section>
                    </Hidden>
                  </Grid>
                  <Grid item xs={12} lg={7}>
                    <Paper className={classes.paper}>
                      <Typography variant="h1" noWrap>
                        <ButtonBase>
                          {item.title}
                        </ButtonBase>
                      </Typography>
                      <Typography component="p">
                        {item.desc}
                      </Typography>
                      <section className={classes.time}>
                        <Typography component="h6">
                          {t('crypto-landing:promo_periode')}
                          :&nbsp;
                          {item.date}
                        </Typography>
                      </section>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

Promotion.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(Promotion);
