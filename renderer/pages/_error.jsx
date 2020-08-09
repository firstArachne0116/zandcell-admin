import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import brand from '../static/text/brand';
import Error from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { withTranslation } from '../i18n';

const styles = theme => ({
  dedicatedPage: {
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  }
});

class ErrorPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }

  render() {
    const { onToggleDark, onToggleDir } = this.props;
    const {
      errorCode,
      stars,
      classes,
      t
    } = this.props;
    if (errorCode) {
      return (
        <Fragment>
          <Head>
            <title>
              { brand.crypto.name }
              &nbsp; -&nbsp;
              {errorCode}
            </title>
          </Head>
          <div className={classes.dedicatedPage}>
            <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert />
            <Error errorCode={errorCode} text={t('common:404')} />
            <Footer invert />
          </div>
        </Fragment>
      );
    }

    return (
      <div className={classes.dedicatedPage}>
        {t('description')}
        Next stars:&nbsp;
        {stars}
      </div>
    );
  }
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: '404',
  stars: 0,
};

ErrorPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'crypto-landing'],
});

export default withTranslation(['common', 'crypto-landing'])(withStyles(styles)(ErrorPage));
