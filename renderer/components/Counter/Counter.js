import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import routeLink from '../../static/text/link';
import { withTranslation } from '../../i18n';
import { useText } from '../../theme/common';
import useStyles from './counter-style';

function Counter(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 200);
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ReactWOW animation="fadeIn" offset={200} callback={handlePlay}>
          <Typography variant="h3" className={text.title}>
            {countup(2, play)}
            &nbsp;
            {countup(234, play)}
            &nbsp;
            {countup(567, play)}
          </Typography>
          <Typography component="p" className={text.subtitle}>
            {t('crypto-landing:footer_counter')}
          </Typography>
        </ReactWOW>
        <div className={classes.callAction}>
          <Typography variant="h4" gutterBottom className={text.subtitle}>
            {t('crypto-landing:footer_waiting')}
          </Typography>
          <Button variant="contained" href={routeLink.crypto.register} color="secondary" size="large" className={classes.button}>
            {t('crypto-landing:getstarted')}
          </Button>
        </div>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(Counter);
