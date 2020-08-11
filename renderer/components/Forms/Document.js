/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import {
  Button,
  Box,
  Typography,
  IconButton,
  Paper,
  Container,
  Grid,
  Snackbar,
  CircularProgress,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';

import GetAppIcon from '@material-ui/icons/GetApp';

import { useDispatch, useSelector } from 'react-redux';
import download from 'downloadjs';


import { useTheme } from '@material-ui/core/styles';
import routeLink from '../../static/text/link';
import { withTranslation } from '../../i18n';
import Parallax from '../Parallax/Hexagonal';
import useStyles from './form-style';
import TabPanel from '../TabPaenl';

import config from '../../api/config';

import * as Actions from '../../store/actions/main';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Document() {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useTheme();

  const [pageLoadingState, setPageLoadingState] = useState(false);
  const [openNotif, setNotif] = useState(false);

  const currentRequest = useSelector((state) => state.main.requestReducer.currentRequest);
  const documents = useSelector((state) => state.main.requestReducer.documents);
  const comments = useSelector((state) => state.main.requestReducer.comments);
  const files = useSelector((state) => state.main.requestReducer.files);
  const decodedToken = useSelector((state) => state.main.authReducer.decodedToken);

  const [value, setValue] = React.useState(0);

  const [commentDialogVisible, setCommentDialogVisible] = useState(false);
  const [isComment, setIsComment] = useState(true);
  const [currentDoc, setCurrentDoc] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    if (!currentRequest) {
      router.push('/check-request');
    }
    if (!pageLoadingState) {
      dispatch(Actions.getRequestContentById(currentRequest));
    }
  }, []);

  useEffect(() => {
    if (!pageLoadingState && currentRequest && documents && comments && files) {
      setPageLoadingState(true);
    }
    setCommentDialogVisible(false);
  }, [documents, comments, files]);

  useEffect(() => {
    if (pageLoadingState) {
      console.log('page data loaded');
    }
  }, [pageLoadingState]);

  const handleClose = () => {
    setNotif(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAccept = (doc) => {
    dispatch(Actions.acceptDoc(doc));
  };

  const handleReject = (doc) => {
    // dispatch(Actions.rejectDoc(doc));
    setIsComment(false);
    setCurrentDoc(doc);
    setNewComment('');
    setCommentDialogVisible(true);
  };

  const downloadFile = (file) => {
    const x = new XMLHttpRequest();
    x.open('GET', config.uploadUrl + file.fileName, true);
    x.responseType = 'blob';
    x.onload = () => {
      if (x.status === 200) {
        download(x.response, file.name);
      } else {
        dispatch(Actions.showNotification('Something went wrong.'));
      }
    };
    x.send();
  };

  const addComment = (doc) => {
    setIsComment(true);
    setCurrentDoc(doc);
    setNewComment('');
    setCommentDialogVisible(true);
  };

  const confirmAddComment = () => {
    if (isComment) {
      console.log(decodedToken);
      dispatch(Actions.addComment({
        userName: decodedToken.userName,
        referId: currentDoc._id,
        commentType: 1,
        description: newComment
      }));
    } else {
      dispatch(Actions.rejectDoc(currentDoc._id, decodedToken.userName, newComment));
    }
  };

  const _renderCommentDialog = () => (
    <Dialog open={commentDialogVisible} onClose={() => setCommentDialogVisible(false)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{isComment ? 'Add a comment' : 'Reason for reject'}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={isComment ? 'Comment' : 'Reason'}
          type="text"
          style={{ width: 400, height: 100 }}
          multiline
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setCommentDialogVisible(false)} color="secondary">
            Cancel
        </Button>
        <Button onClick={() => confirmAddComment()} color="primary">
            OK
        </Button>
      </DialogActions>
    </Dialog>
  );

  const _renderDocument = () => {
    if (documents.length === 0) {
      return <Typography variant="h4">There is no Documents for this Request</Typography>;
    }
    return (
      <div>
        <Box p={0} pt={0}>
          <Divider />
          <div className={classes.tabContainer}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              {
                documents.map((doc, index) => (
                  <Tab label={doc.docType} {...a11yProps(index)} key={'Tab -- ' + index} />
                ))
              }
            </Tabs>
            {
              documents.map((doc, index) => (
                <TabPanel value={value} index={index} key={'TabPanel -- ' + index}>
                  <Grid container direction="row">
                    <Grid item xs={9} sm={10}>
                      <Box m={2} mb={0}>
                        <Grid container direction="row" justify="space-between">
                          <Grid item>
                            <Typography variant="subtitle1">
                              <b>
                                {doc.name}
                                {' ( '}
                                {doc.status.slice(0, 1).toUpperCase() + doc.status.slice(1, doc.status.length)}
                                {' )'}
                              </b>
                            </Typography>
                          </Grid>
                          {doc.status.toLowerCase() === 'pending' ? (
                            <Grid item>
                              <Button color="primary" variant="outlined" onClick={() => handleAccept(doc)} style={{ marginRight: theme.spacing(2) }}>Accept</Button>
                              <Button color="secondary" variant="outlined" onClick={() => handleReject(doc)}>Reject</Button>
                            </Grid>
                          ) : <></>}
                        </Grid>
                      </Box>
                      <Box m={3} mt={0}>
                        <Typography variant="subtitle2">{doc.description}</Typography>
                      </Box>
                      <Box m={2} mt={0}>
                        <Typography variant="subtitle1"><b>Activity</b></Typography>
                      </Box>
                      <Timeline align="alternate">
                        {comments.filter((comment) => comment.referId === doc._id).map((comment, index1) => {
                          if (index1 % 2 === 0) {
                            return (
                              <TimelineItem key={'comment' + index1}>
                                <TimelineOppositeContent style={{ flex: 0, minWidth: 120, paddingLeft: 0 }}>
                                  <Typography color="textSecondary">{comment.updatedAt.slice(0, 10)}</Typography>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                  {comment.commentType ? <TimelineDot color="primary" /> : <TimelineDot color="secondary" /> }
                                  <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                  <Box m={2} mt={0}>
                                    <b>
                                      <big>{comment.userName}</big>
                                    </b>
                                    <br />
                                    <font style={{ marginLeft: theme.spacing(1) }}>
                                      {comment.description}
                                    </font>
                                  </Box>
                                  <Divider />
                                </TimelineContent>
                              </TimelineItem>
                            );
                          }
                          return (
                            <TimelineItem key={'comment' + index1}>
                              <TimelineOppositeContent>
                                <Box m={2} mt={0}>
                                  <b>
                                    <big>{comment.userName}</big>
                                  </b>
                                  <br />
                                  <font style={{ marginLeft: theme.spacing(1) }}>
                                    {comment.description}
                                  </font>
                                </Box>
                                <Divider />
                              </TimelineOppositeContent>
                              <TimelineSeparator>
                                {comment.commentType ? <TimelineDot color="primary" /> : <TimelineDot color="secondary" /> }
                                <TimelineConnector />
                              </TimelineSeparator>
                              <TimelineContent style={{ flex: 0, minWidth: 120, paddingLeft: 0 }}>
                                <Typography color="textSecondary">{comment.updatedAt.slice(0, 10)}</Typography>
                              </TimelineContent>
                            </TimelineItem>
                          );
                        })}
                      </Timeline>
                      <center style={{ width: '100%' }}>
                        <Button color="primary" variant="contained" onClick={() => addComment(doc)}>Add a comment</Button>
                      </center>
                    </Grid>
                    <Grid item xs={3} sm={2} style={{ borderLeft: '1px solid lightgray' }}>
                      <Box component="div" className={classes.listBorder}>
                        <List component="nav" className={classes.fileList} aria-label="mailbox folders">
                          {
                            files.filter((file) => file.documentId === doc._id).map((file, fileIndex) => (
                              <ListItem button divider key={'Download Link -- ' + fileIndex} onClick={() => downloadFile(file)}>
                                <ListItemText primary={file.name} />
                                <GetAppIcon />
                              </ListItem>
                            ))
                          }
                        </List>
                      </Box>
                    </Grid>
                  </Grid>
                </TabPanel>
              ))
            }
          </div>
        </Box>
      </div>
    );
  };
  const _renderForm = () => {
    if (!pageLoadingState) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    }
    return _renderDocument();
  };

  return (
    <div className={classes.pageWrap}>
      <div className={clsx(classes.parallax, classes.parallaxLeft)}>
        <Parallax />
      </div>
      <div className={clsx(classes.parallax, classes.parallaxRight)}>
        <Parallax />
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
      <Container maxWidth="xl" className={classes.innerWrap}>
        <IconButton href={routeLink.crypto.checkRequest} className={clsx(classes.backtohome, classes.invert)}>
          <i className="ion-ios-home-outline" />
          <i className="ion-ios-arrow-thin-left" />
        </IconButton>
        <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
          <div className={classes.fullFromWrap}>
            <Box ml={20} mr={20} mt={2}>
              <Grid container direction="row">
                <Grid item lg={4} md={6} sm={12}>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: 'justify', minWidth: 100 }}><b>User</b></td>
                        <td style={{ textAlign: 'left' }}>
                          {'   :   '}
                          {currentRequest.userName}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: 'justify', minWidth: 100 }}><b>Product</b></td>
                        <td style={{ textAlign: 'left' }}>
                          {'   :   '}
                          {currentRequest.productName}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: 'justify', minWidth: 100 }}><b>Model</b></td>
                        <td style={{ textAlign: 'left' }}>
                          {'   :   '}
                          {currentRequest.model}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: 'justify', minWidth: 100 }}><b>Quantity</b></td>
                        <td style={{ textAlign: 'left' }}>
                          {'   :   '}
                          {currentRequest.quantity}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Grid>
                <Grid item lg={4} md={6} sm={12}>
                  <table>
                    <tbody>
                      <tr>
                        <td style={{ textAlign: 'justify', minWidth: 100 }}><b>Price</b></td>
                        <td style={{ textAlign: 'left' }}>
                          {'   :   '}
                          {currentRequest.priceMin}
                          {currentRequest.requestType === 0 ? ' ~ ' + currentRequest.priceMax : ''}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: 'justify', minWidth: 100 }}><b>Commission</b></td>
                        <td style={{ textAlign: 'left' }}>
                          {'   :   '}
                          {currentRequest.commission}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: 'justify', minWidth: 100 }}><b>Delivery</b></td>
                        <td style={{ textAlign: 'left' }}>
                          {'   :   '}
                          {currentRequest.deliveryLocation}
                        </td>
                      </tr>
                      <tr>
                        <td style={{ textAlign: 'justify', minWidth: 100 }}><b>Created At</b></td>
                        <td style={{ textAlign: 'left' }}>
                          {'   :   '}
                          {currentRequest.createdAt.slice(0, 10)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Grid>
                <Grid item lg={4} sm={12}>
                  <Typography variant="subtitle2" name="description">
                    <b>Description</b>
                  </Typography>
                  {currentRequest.description}
                </Grid>
              </Grid>
            </Box>
            <div className={classes.form}>
              { _renderForm() }
            </div>
          </div>
        </Paper>
      </Container>
      {_renderCommentDialog()}
    </div>
  );
}

Document.propTypes = {
  // t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(Document);
