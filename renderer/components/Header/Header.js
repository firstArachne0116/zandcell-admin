import React, { useState, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useDispatch, useSelector } from 'react-redux';
import Scrollspy from 'react-scrollspy';
import { withTranslation } from '../../i18n';
// import Settings from './Settings';
// import MarketPrice from './MarketPrice';
// import MobileMenu from './MobileMenu';

import * as Actions from '../../store/actions/main';
import routeLink from '../../static/text/link';
import logo from '../../static/images/zandcell-logo.png';
import useStyles from './header-style';
import navMenu from './menu';
import '../../vendors/hamburger-menu.css';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function Header(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  // const apiIsBusy = useSelector(state => state.main.apiReducer.isBusy);
  const signInState = useSelector(state => state.main.authReducer.state);
  // const accessToken = useSelector(state => state.main.authReducer.access_token);

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    const storageAccessToken = localStorage.getItem('access_token') || '';
    console.log(signInState);
    if (signInState === '') {
      console.log('need to login = Header.js');
      router.push('/');
    } else if (storageAccessToken !== undefined && storageAccessToken !== '') {
      dispatch(Actions.signInWithToken(storageAccessToken));
    }
    window.addEventListener('scroll', handleScroll);
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const {
    invert,
    t
  } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const logout = () => {
    localStorage.removeItem('access_token');
    dispatch(Actions.signOut());
    dispatch(Actions.showNotification('You have logged out.'));
    router.push('/');
  };

  return (
    <Fragment>
      <AppBar
        component="header"
        position="relative"
        id="header"
        className={clsx(
          classes.header,
          fixed && classes.fixed,
          invert && classes.invert,
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={clsx(classes.navMenu, invert && classes.invert)}>
              <div className={classes.logo}>
                {invert ? (
                  <a href={routeLink.crypto.home}>
                    <img src={logo} alt="logo" />
                  </a>
                ) : (
                  <AnchorLink href="#home">
                    <img src={logo} alt="logo" />
                  </AnchorLink>
                )}
              </div>
              {isDesktop && (
                <Scrollspy
                  items={navMenu}
                  currentClassName="active"
                >
                  <li>
                    <Button href="/user-management">
                      User Management
                    </Button>
                  </li>
                  <li>
                    <Button href="/doctype-management">
                      Document Type Management
                    </Button>
                  </li>
                  <li>
                    <Button href="/check-request">
                      Request Management
                    </Button>
                  </li>
                </Scrollspy>
              )}
            </nav>
            <Hidden mdDown>
              <Divider className={classes.divider} />
            </Hidden>
            {
              signInState === ''
                ? (
                  <nav className={clsx(classes.navMenu, classes.navAuth)}>
                    <Button href={routeLink.crypto.login}>
                      {t('crypto-landing:header_login')}
                    </Button>
                    <Button href={routeLink.crypto.register} variant="contained" color="secondary" className={classes.button}>
                      {t('crypto-landing:header_register')}
                    </Button>
                    {/* <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} /> */}
                  </nav>
                )
                : (
                  <nav className={clsx(classes.navMenu, classes.navAuth)}>
                    <Button onClick={logout} variant="contained" color="secondary" className={classes.button}>
                      {t('crypto-landing:header_logout')}
                    </Button>
                  </nav>
                )
            }
          </div>
        </Container>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  invert: PropTypes.bool,
  t: PropTypes.func.isRequired
};

Header.defaultProps = {
  sticky: false,
  invert: false
};

export default withTranslation(['common', 'crypto-landing'])(Header);
