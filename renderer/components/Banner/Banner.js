import React, { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import { useDispatch } from 'react-redux';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import useStyles from './banner-style';

// import * as api from '../../api';
// import * as Actions from '../../store/actions/main';
function Banner() {
  // const router = useRouter();
  const classes = useStyles();
  const elem = useRef(null);

  // const dispatch = useDispatch();

  // const [pageLoadingState, setPageLoadingState] = useState(false);
  // const [requests, setRequests] = useState([]);
  // console.log(requests);
  // const signInState = useSelector(state => state.main.authReducer.state);

  // const { t } = props;
  // const theme = useTheme();

  const [hide, setHide] = useState(false);

  // const getAllRequests = (requestType, requestStatus) => {
  //   api.getAllRequests(requestType, requestStatus).then((result) => {
  //     if (result.data.success) {
  //       if (result.data.requests == null) {
  //         dispatch(Actions.showNotification(result.data.message));
  //         setRequests([]);
  //       } else {
  //         setRequests(result.data.requests);
  //         // setDocuments(result.data.documents);
  //       }
  //       setPageLoadingState(false);
  //     } else {
  //       dispatch(Actions.showNotification('Something went wrong.'));
  //     }
  //   });
  // };

  // useEffect(() => {
  //   if (pageLoadingState) {
  //     console.log('page data loaded');
  //   }
  //   getAllRequests(reqType, reqStatus);
  //   console.log('getting all requests');
  // }, [pageLoadingState]);

  // const handleClose = () => {
  //   setNotif(false);
  // };

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
        {/*  */}
      </Container>
    </div>
  );
}

Banner.propTypes = {
  // t: PropTypes.func.isRequired
};

export default withTranslation(['common', 'crypto-landing'])(Banner);
