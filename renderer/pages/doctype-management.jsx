/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Notification from '../components/Notification';
import brand from '../static/text/brand';
import { withTranslation } from '../i18n';
import DocTypeManagementForm from '../components/Forms/DocTypeManagement';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing())
  },
  spaceTop: {
    paddingTop: sectionMargin(theme.spacing())
  },
  containerWrap: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
    '& > section': {
      position: 'relative'
    }
  },
}));

function DocTypeManagementPage(props) {
  const router = useRouter();
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const { onToggleDark, onToggleDir, t } = props;

  useEffect(() => {
    console.log(router.query);
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.crypto.name }
          &nbsp; - Document Type Management
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert
        />
        <div>
          <DocTypeManagementForm />
        </div>
        <Notification />
      </div>
    </React.Fragment>
  );
}

DocTypeManagementPage.propTypes = {
  t: PropTypes.func.isRequired,
};

DocTypeManagementPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(DocTypeManagementPage);
