import React, { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Container,
  Snackbar
} from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import useStyles from './banner-style';

import * as Actions from '../../store/actions/main';
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

  const dispatch = useDispatch();

  const requests = useSelector(state => state.main.requestReducer.requests);
  const allDocuments = useSelector(state => state.main.requestReducer.allDocuments);

  const [pageLoadingState, setPageLoadingState] = useState(false);
  const [openNotif, setNotif] = useState(false);

  useEffect(() => {
    console.log(pageLoadingState);
    if (!pageLoadingState) {
      console.log('load page data');
      dispatch(Actions.getAllRequests('all', 'pending'));
      dispatch(Actions.getAllDocuments());
    }
  }, []);

  useEffect(() => {
    if (pageLoadingState) {
      console.log('page data loaded');
    }
  }, [pageLoadingState]);

  useEffect(() => {
    if (!pageLoadingState && requests && allDocuments) {
      console.log(requests);
      setPageLoadingState(true);
    }
  }, [requests, allDocuments]);

  const handleClose = () => {
    setNotif(false);
  };

  // const getAcceptedFileCount = (reqId) => {
  //   const len = documents.length;
  //   let acceptedCnt = 0;
  //   for (let i = 0; i < len; i++) if (documents[i].requestId === reqId && documents[i].status === 'accepted') acceptedCnt++;
  //   return acceptedCnt;
  // };

  // const getPendingFileCount = (reqId) => {
  //   const len = documents.length;
  //   let pendingCnt = 0;
  //   for (let i = 0; i < len; i++) if (documents[i].requestId === reqId && documents[i].status === 'pending') pendingCnt++;
  //   return pendingCnt;
  // };

  const _renderRequests = () => {
    if (requests.length) {
      return (
        <Container className={classes.tableRoot}>
          {/*  */}
        </Container>
      );
    }
    return (<></>);
  };

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
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Container fixed>
        {_renderRequests()}
      </Container>
    </div>
  );
}

Banner.propTypes = {
  // t: PropTypes.func.isRequired
};

export default withTranslation(['common', 'crypto-landing'])(Banner);
