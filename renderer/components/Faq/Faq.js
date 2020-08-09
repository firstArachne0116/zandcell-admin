import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import { Accordion } from '@material-ui/core'
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import { useText } from '../../theme/common';
import Parallax from '../Parallax/Hexagonal';
import Title from '../Title';
import useStyles from './faq-style';


function Faq(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { t } = props;
  return (
    <div className={classes.root}>
      <div className={classes.parallax}>
        <Parallax />
      </div>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Title text={t('crypto-landing:faq_title')} align={isMobile ? 'center' : 'left'} />
            <Typography className={text.subtitle2} align={isMobile ? 'center' : 'left'} component="p">
              {t('crypto-landing:faq_subtitle')}
            </Typography>
            <Hidden smDown>
              <div className={classes.illustration}>
                <img src="/static/images/crypto/faq.png" alt="illustration" />
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Faq.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['crypto-landing'])(Faq);
