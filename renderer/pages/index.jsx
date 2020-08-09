import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Hidden from '@material-ui/core/Hidden';
import Header from '../components/Header';
import Banner from '../components/Banner';
// import Promotion from '../components/Promotion';
// import Feature from '../components/Feature';
// import Benefit from '../components/Benefit';
// import Testimonials from '../components/Testimonials';
// import Faq from '../components/Faq';
import FooterWithCounter from '../components/Footer/FooterWithCounter';
// import PageNav from '../components/PageNav';
// import Notification from '../components/Notification';
import brand from '../static/text/brand';
import { withTranslation } from '../i18n';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2),
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2),
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing() {
  // i18n.changeLanguage('en');
  const classes = useStyles();
  // const theme = useTheme();
  // const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.crypto.name }
          &nbsp; - Home Page
        </title>
      </Head>
      {/* <CssBaseline /> */}
      {/* <section id="home" /> */}
      <div className={classes.mainWrap}>
        <Header />
        <main className={classes.containerWrap}>
          <section id="banner">
            <Banner />
          </section>
        </main>
        <FooterWithCounter />
        <script src="/static/scripts/particles.min.js" />
        <script src="/static/scripts/stats.min.js" />
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common', 'crypto-landing'])(Landing);
// export default Landing;
