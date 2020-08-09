import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-slick';
import clsx from 'clsx';
import imgApi from '../../static/images/imgAPI';
import { withTranslation } from '../../i18n';
import { useText } from '../../theme/common';
import Title from '../Title';
import TestiCard from '../Cards/Testimonial';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    avatar: imgApi.avatar[6],
    title: 'Chief Digital Officer',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    avatar: imgApi.avatar[7],
    title: 'Chief Digital Officer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    avatar: imgApi.avatar[1],
    title: 'Graphic Designer',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jovelin Doe',
    avatar: imgApi.avatar[2],
    title: 'Senior Graphic Designer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jihan Doe',
    avatar: imgApi.avatar[3],
    title: 'CEO Software House',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'John Doe',
    avatar: imgApi.avatar[9],
    title: 'Senior Graphic Designer',
  },
];


function Testimonials(props) {
  const slider = useRef(null);
  const classes = useStyle();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = props;
  const [active, setActive] = useState(0);
  const [activeTransition, setActiveTransition] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    afterChange: (current) => setActive(current),
    beforeChange: (current, next) => setActiveTransition(next),
  };
  const slideState = index => {
    if (index === activeTransition - 1 || index === active - 1) {
      return classes.past;
    }
    if (index === activeTransition + 1 || index === active + 1) {
      return classes.future;
    }
    if (index === activeTransition || index === active) {
      return classes.current;
    }
    return classes.slide;
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title text={t('crypto-landing:testi_title')} align="center" />
        <Typography className={text.subtitle2} align="center">
          {t('crypto-landing:testi_subtitle')}
        </Typography>
        <Grid container spacing={6}>
          <Grid item md={1} xs={12} />
          <Grid item md={10} xs={12}>
            <div className={classes.sliderWrap}>
              <div className={classes.carousel}>
                <button
                  type="button"
                  className={clsx(classes.nav, classes.prev)}
                  onClick={() => slider.current.slickPrev()}
                >
                  <i className="ion-ios-arrow-back" />
                </button>
                <Carousel ref={slider} {...settings}>
                  {testiContent.map((item, index) => (
                    <div key={index.toString()} className={clsx(classes.item, slideState(index))}>
                      <div className={classes.slideContent}>
                        <TestiCard
                          text={item.text}
                          name={item.name}
                          title={item.title}
                          avatar={item.avatar}
                          active={index === active}
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
                <button
                  type="button"
                  className={clsx(classes.nav, classes.next)}
                  onClick={() => slider.current.slickNext()}
                >
                  <i className="ion-ios-arrow-forward" />
                </button>
              </div>
              <div className={classes.pagination}>
                <ul>
                  {[...Array(testiContent.length)].map((e, index) => (
                    <li
                      key={index.toString()}
                      className={index === active ? classes.active : ''}
                    >
                      <button type="button" onClick={() => slider.current.slickGoTo(index)} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Testimonials.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(Testimonials);
