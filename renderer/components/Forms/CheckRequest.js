/* eslint-disable react/no-array-index-key */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import ClearIcon from '@material-ui/icons/Clear';
import CheckIcon from '@material-ui/icons/Check';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';

import routeLink from '../../static/text/link';
import { withTranslation } from '../../i18n';
import { useText } from '../../theme/common';
import Parallax from '../Parallax/Hexagonal';
import useStyles from './form-style';
import * as actionNotification from '../../store/actions/main/notification.actions';
import * as api from '../../api';
import * as Actions from '../../store/actions/main';

const columns = [
  { id: 'userName', label: 'UserName', minWidth: 150 },
  { id: 'productName', label: 'ProductName', minWidth: 150 },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 50,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 150,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'commission',
    label: 'Commission',
    minWidth: 50,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'createdAt',
    label: 'Created At',
    minWidth: 120,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'updatedAt',
    label: 'Updated At',
    minWidth: 120,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 100,
    format: (value) => value.toFixed(2),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 180,
  }
];

function NewRequest() {
  const classes = useStyles();
  const text = useText();
  const router = useRouter();
  // const { t } = props;
  // const theme = useTheme();

  const dispatch = useDispatch();

  const [requestAcceptDlgVisible, setRequestAcceptDlgVisible] = useState(''); // '' => false, 'Accept' => AcceptDlg, 'Reject' => RejectDlg
  const [requestId, setRequestId] = useState(-1);
  const [requests, setRequests] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [requestActionText, setRequestActionText] = useState('');
  const [pageLoadingState, setPageLoadingState] = useState(false);
  const [openNotif, setNotif] = useState(false);

  const [reqType, setReqType] = useState('Buyer');
  const [reqStatus, setReqStatus] = useState('all');

  const [requestUserInfo, setRequestUserInfo] = useState([]);
  const [userInfoDlgVisible, setUserInfoDlgVisible] = useState(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const getAllRequests = (requestType, requestStatus) => {
    api.getAllRequests(requestType, requestStatus).then((result) => {
      if (result.data.success) {
        if (result.data.requests == null) {
          dispatch(actionNotification.showNotification(result.data.message));
          setRequests([]);
        } else {
          setRequests(result.data.requests);
          setDocuments(result.data.documents);
        }
        setPageLoadingState(false);
      } else {
        dispatch(actionNotification.showNotification('Something went wrong.'));
      }
    });
  };

  useEffect(() => {
    if (pageLoadingState) {
      console.log('page data loaded');
    }
    getAllRequests(reqType, reqStatus);
    console.log('getting all requests');
  }, [pageLoadingState]);

  const handleClose = () => {
    setNotif(false);
  };

  const getAcceptedFileCount = (reqId) => {
    const len = documents.length;
    let acceptedCnt = 0;
    for (let i = 0; i < len; i++) if (documents[i].requestId === reqId && documents[i].status === 'accepted') acceptedCnt++;
    return acceptedCnt;
  };

  const getPendingFileCount = (reqId) => {
    const len = documents.length;
    let pendingCnt = 0;
    for (let i = 0; i < len; i++) if (documents[i].requestId === reqId && documents[i].status === 'pending') pendingCnt++;
    return pendingCnt;
  };

  const generateRequestActionText = (actionType, reqId) => {
    const pendingCnt = getPendingFileCount(reqId);
    if (pendingCnt !== 0) return 'There are ' + pendingCnt + ' document(s) still pending';
    return '';
  };

  const handleCloseUserInfoDlg = () => {
    setUserInfoDlgVisible(false);
  };

  const handleAcceptRequest = (reqId, event) => {
    setRequestId(reqId);
    setRequestActionText(generateRequestActionText('accept', reqId));
    setRequestAcceptDlgVisible('Accept');
    event.stopPropagation();
  };

  const handleRejectRequest = (reqId, event) => {
    setRequestId(reqId);
    setRequestActionText(generateRequestActionText('reject', reqId));
    setRequestAcceptDlgVisible('Reject');
    event.stopPropagation();
  };

  const handleUserInfoView = (userName, event) => {
    api.getUserInfo(userName).then((result) => {
      if (result.data.success) {
        setRequestUserInfo(result.data.user);
        setUserInfoDlgVisible(true);
      } else {
        dispatch(actionNotification.showNotification('Something went wrong.'));
        setUserInfoDlgVisible(false);
      }
    });
    event.stopPropagation();
  };

  const handleViewRequest = (row) => {
    dispatch(Actions.setCurrentRequest(row));
    router.push('/document');
  };

  const onCloseRequestAcceptDlg = () => {
    setRequestAcceptDlgVisible('');
  };

  const onRejectRequest = () => {
    api.rejectRequest(requestId).then((result) => {
      if (result.data.success) {
        getAllRequests(reqType, reqStatus);
        setRequestAcceptDlgVisible('');
      } else {
        dispatch(actionNotification.showNotification('Something went wrong.'));
        setRequestAcceptDlgVisible('');
      }
    });
  };

  const onAcceptRequest = () => {
    api.acceptRequest(requestId).then((result) => {
      if (result.data.success) {
        getAllRequests(reqType, reqStatus);
        setRequestAcceptDlgVisible('');
      } else {
        dispatch(actionNotification.showNotification('Something went wrong.'));
        setRequestAcceptDlgVisible('');
      }
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleRequestTypeChange = (event) => {
    setReqType(event.target.value);
    getAllRequests(event.target.value, reqStatus);
  };

  const handleRequestStatusChange = (event) => {
    setReqStatus(event.target.value);
    getAllRequests(reqType, event.target.value);
  };

  const _renderRequests = () => {
    if (requests.length) {
      return (
        <Paper className={classes.tableRoot}>
          <TableContainer className={classes.tableContainer}>
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, requestIndex) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={requestIndex} style={{ cursor: 'pointer' }} onClick={() => handleViewRequest(row)}>
                    {columns.map((column) => {
                      if (column.id === 'price') {
                        const { priceMin, priceMax, requestType } = row;
                        return (
                          <TableCell key={column.id} align="center">
                            { requestType === 0 ? (priceMin + ' ~ ' + priceMax) : priceMin}
                          </TableCell>
                        );
                      }
                      if (column.id === 'action') {
                        return (
                          <TableCell key={column.id} align="center" style={{ minWidth: 150 }}>
                            <IconButton aria-label="Accept" color="primary" onClick={(e) => handleAcceptRequest(row._id, e)}>
                              <CheckIcon />
                            </IconButton>
                            <IconButton aria-label="Reject" color="secondary" onClick={(e) => handleRejectRequest(row._id, e)}>
                              <ClearIcon />
                            </IconButton>
                          </TableCell>
                        );
                      }
                      if (column.id === 'status') {
                        const acpCnt = getAcceptedFileCount(row._id);
                        const pndCnt = getPendingFileCount(row._id);
                        return (
                          <TableCell key={column.id} align="center">
                            {row[column.id] + ' (' + (acpCnt + pndCnt) + '/' + pndCnt + ')'}
                          </TableCell>
                        );
                      }
                      if (column.id === 'createdAt' || column.id === 'updatedAt') {
                        const value = new Date(row[column.id]);
                        return (
                          <TableCell key={column.id} align="center">
                            {value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate() + ' ' + (value.getHours() + 1) + ':' + value.getMinutes() + ':' + value.getSeconds()}
                          </TableCell>
                        );
                      }
                      if (column.id === 'userName') {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align="center">
                            <Button onClick={(e) => handleUserInfoView(value, e)}>
                              {value}
                            </Button>
                          </TableCell>
                        );
                      }

                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="center">
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={requests.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      );
    }
    return (<></>);
  };

  return pageLoadingState ? (
    <div>
      <CircularProgress />
    </div>
  ) : (
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
        <IconButton href={routeLink.crypto.home} className={clsx(classes.backtohome, classes.invert)}>
          <i className="ion-ios-home-outline" />
          <i className="ion-ios-arrow-thin-left" />
        </IconButton>
        <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
          <div className={classes.fullFromWrap}>
            <Typography
              variant="h4"
              align="center"
              className={clsx(classes.title, text.title)}
              gutterBottom
            >
              Check Requests
            </Typography>
            <Grid container alignItems="center" style={{ paddingLeft: 30 }}>
              <FormControl component="fieldset">
                <RadioGroup row aria-label="gender" name="requestType" value={reqType} onChange={handleRequestTypeChange}>
                  <FormControlLabel value="Buyer" control={<Radio />} label="Buyer" />
                  <FormControlLabel value="Seller" control={<Radio />} label="Seller" />
                </RadioGroup>
              </FormControl>
              <Divider orientation="vertical" flexItem />
              <FormControl className={classes.requestStatusSelect}>
                <Select
                  value={reqStatus}
                  onChange={handleRequestStatusChange}
                  displayEmpty
                  className={classes.selectEmpty}
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="accepted">Accepted</MenuItem>
                  <MenuItem value="rejected">Rejected</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <div>
              { _renderRequests() }
            </div>
          </div>
        </Paper>
        <Dialog
          open={requestAcceptDlgVisible !== ''}
          onClose={onCloseRequestAcceptDlg}
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            Confirm to
            {' '}
            {requestAcceptDlgVisible}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you really to
              {' '}
              {requestAcceptDlgVisible}
              ?
              {requestActionText !== '' ? (
                <>
                  <br />
                  {requestActionText}
                </>
              ) : (<></>)}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={onCloseRequestAcceptDlg} color="secondary">
              Cancel
            </Button>
            <Button onClick={requestAcceptDlgVisible === 'Accept' ? onAcceptRequest : onRejectRequest} color="primary">
              {requestAcceptDlgVisible}
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={userInfoDlgVisible}
          onClose={handleCloseUserInfoDlg}
        >
          <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
            User Info
          </DialogTitle>
          <DialogContent>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell aligh="right" scope="row"> Name </TableCell>
                    <TableCell align="left">{requestUserInfo.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell aligh="right" scope="row"> Email </TableCell>
                    <TableCell align="left">{requestUserInfo.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell aligh="right" scope="row"> Phone </TableCell>
                    <TableCell align="left">{requestUserInfo.phone}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell aligh="right" scope="row"> Description </TableCell>
                    <TableCell align="left">{requestUserInfo.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell aligh="right" scope="row"> UserName </TableCell>
                    <TableCell align="left">{requestUserInfo.username}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleCloseUserInfoDlg} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
}

NewRequest.propTypes = {
  // t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(NewRequest);
