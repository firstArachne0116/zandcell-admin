import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Select,
  InputLabel,
  MenuItem,
  Switch,
} from '@material-ui/core';

import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import routeLink from '../../static/text/link';
import { withTranslation } from '../../i18n';
import Parallax from '../Parallax/Hexagonal';
import useStyles from './form-style';

import * as Actions from '../../store/actions/main';

const newDocType = {
  name: '',
  author: '',
  isRequired: false,
  isActive: false,
};

const newUser = {
  name: '',
  email: '',
  phone: '',
};

function NewRequest() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const [pageLoadingState, setPageLoadingState] = useState(false);
  const [openNotif, setNotif] = useState(false);

  const [settingType, setSettingType] = useState(0);

  const [docTypeValue, setDocTypeValue] = useState(newDocType);
  const [userValue, setUserValue] = useState(newUser);

  const [docTypeModalVisiable, setDocTypeModalVisiable] = useState(false);
  const [userModalVisiable, setUserModalVisiable] = useState(false);

  const docTypes = useSelector(state => state.main.settingReducer.docTypes);
  const users = useSelector(state => state.main.settingReducer.users);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    console.log(pageLoadingState);
    if (!pageLoadingState) {
      console.log('load page data');
      dispatch(Actions.getAllDocTypes());
      dispatch(Actions.getAllUsers());
    }
  }, []);

  useEffect(() => {
    if (pageLoadingState) {
      console.log('page data loaded');
    }
  }, [pageLoadingState]);

  useEffect(() => {
    if (!pageLoadingState && docTypes && users) {
      console.log(docTypes);
      console.log(users);
      setPageLoadingState(true);
    }
    setDocTypeModalVisiable(false);
    setUserModalVisiable(false);
  }, [docTypes, users]);

  const handleClose = () => {
    setNotif(false);
  };

  const handleUserEnable = (user) => {
    dispatch(Actions.updateUser({ _id: user._id, isEnabled: !user.isEnabled }));
  };

  const registerUser = () => {
    setIsEdit(false);
    setUserValue(newUser);
    setUserModalVisiable(true);
  };

  const handleEditUser = (row) => {
    setIsEdit(true);
    setUserValue(row);
    setUserModalVisiable(true);
  };

  const handleDeleteUser = (row) => {
    dispatch(Actions.updateUser({ _id: row._id, isDeleted: true }));
  };

  const handleResetPassword = (row) => {
    dispatch(Actions.updateUser({ _id: row._id, password: '$2a$10$cQsheULZ.QnkVYw3MsmeN.0YEL5tlaNcIx6xLUBLoKWsduhRGZpES' }));
    dispatch(Actions.showNotification(`Password of ${row.name} has been reset to '123456'.`));
  };

  const handleSaveUser = () => {
    if (isEdit) {
      dispatch(Actions.updateUser(userValue));
    } else {
      dispatch(Actions.addUser(userValue));
    }
  };

  const _renderUserModal = () => (
    <Dialog
      open={userModalVisiable}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{isEdit ? 'Edit User' : 'Register User'}</DialogTitle>
      <DialogContent>
        <Box m={2}>
          <TextField id="name" label="Name" value={userValue.name} onChange={(event) => setUserValue({ ...userValue, name: event.target.value })} required />
        </Box>
        <Box m={2}>
          <TextField id="email" label="Email" value={userValue.email} onChange={(event) => setUserValue({ ...userValue, email: event.target.value })} required />
        </Box>
        <Box m={2}>
          <TextField id="phone" label="Phone" value={userValue.phone} onChange={(event) => setUserValue({ ...userValue, phone: event.target.value })} required />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleSaveUser()}
          color="primary"
          variant="contained"
          disabled={
            !userValue.name || userValue.name === ''
            || !userValue.email || userValue.email === ''
            || !userValue.phone || userValue.phone === ''
          }
        >
          OK
        </Button>
        <Button onClick={() => setDocTypeModalVisiable(false)} color="primary" variant="outlined" autoFocus>Cancel</Button>
      </DialogActions>
    </Dialog>
  );

  const _renderUserSettingForm = () => (
    <Box p={2} component={Paper}>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Typography variant="h3">Customers</Typography>
        </Grid>
        <Grid item>
          <Box m={3}>
            <Button color="primary" variant="contained" onClick={() => registerUser()}>Register</Button>
          </Box>
        </Grid>
      </Grid>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6">Name</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Email</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Phone</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Actions</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users ? users.filter((u) => !u.isDeleted).map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row"><Typography variant="h6">{row.name}</Typography></TableCell>
                <TableCell align="center"><Typography variant="h6">{row.email}</Typography></TableCell>
                <TableCell align="center"><Typography variant="h6">{row.phone}</Typography></TableCell>
                <TableCell align="center">
                  <Switch
                    checked={row.isEnabled}
                    onChange={(event) => handleUserEnable(row, event.target.value)}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                  />
                  <Button onClick={() => handleEditUser(row)}><EditIcon /></Button>
                  <Button onClick={() => handleDeleteUser(row)}><DeleteIcon /></Button>
                  <Button onClick={() => handleResetPassword(row)}>
                    <img src="../../static/images/icons/reset_password.png" alt="Reset Password" style={{ width: 24, height: 24 }} />
                  </Button>
                </TableCell>
              </TableRow>
            )) : <></>}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  const handleAddDocType = () => {
    setIsEdit(false);
    setDocTypeValue(newDocType);
    setDocTypeModalVisiable(true);
  };

  const handleEditDocType = (row) => {
    setIsEdit(true);
    setDocTypeValue({
      _id: row._id, name: row.name, author: row.author, isActive: row.isActive, isRequired: row.isRequired
    });
    setDocTypeModalVisiable(true);
  };

  const handleDeleteDocType = (row) => {
    dispatch(Actions.updateDocType({ _id: row._id, isDeleted: true }));
  };

  const handleSaveDocType = () => {
    if (isEdit) {
      dispatch(Actions.updateDocType(docTypeValue));
    } else {
      dispatch(Actions.addDocType(docTypeValue));
    }
  };

  const _renderDocTypeModal = () => (
    <Dialog
      open={docTypeModalVisiable}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{isEdit ? 'Edit Document Type' : 'Add Document Type'}</DialogTitle>
      <DialogContent>
        <Box m={2}>
          <TextField id="name" label="Name" value={docTypeValue.name} onChange={(event) => setDocTypeValue({ ...docTypeValue, name: event.target.value })} required />
        </Box>
        <Box m={2}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Author</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={docTypeValue.author}
              onChange={(event) => setDocTypeValue({ ...docTypeValue, author: event.target.value })}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="sell">Sell</MenuItem>
              <MenuItem value="buy">Buy</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box m={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Required</FormLabel>
            <RadioGroup row aria-label="gender" name="required" value={docTypeValue.isRequired ? 'Yes' : 'No'} onChange={(event) => setDocTypeValue({ ...docTypeValue, isRequired: event.target.value === 'Yes' })}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
        <Box m={2}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Active</FormLabel>
            <RadioGroup row aria-label="gender" name="active" value={docTypeValue.isActive ? 'Yes' : 'No'} onChange={(event) => setDocTypeValue({ ...docTypeValue, isActive: event.target.value === 'Yes' })}>
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleSaveDocType()}
          color="primary"
          variant="contained"
          disabled={
            !docTypeValue.name || docTypeValue.name === ''
            || !docTypeValue.author || docTypeValue.author === ''
          }
        >
          OK
        </Button>
        <Button onClick={() => setDocTypeModalVisiable(false)} color="primary" variant="outlined" autoFocus>Cancel</Button>
      </DialogActions>
    </Dialog>
  );

  const _renderDocTypeSettingForm = () => (
    <Box p={2} component={Paper}>
      <Grid container direction="row" justify="space-between">
        <Grid item>
          <Typography variant="h3">Document Types</Typography>
        </Grid>
        <Grid item>
          <Box m={3}>
            <Button color="primary" variant="contained" onClick={() => handleAddDocType()}>Add</Button>
          </Box>
        </Grid>
      </Grid>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6">Name</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Author</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Required</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Active</Typography></TableCell>
              <TableCell align="center"><Typography variant="h6">Actions</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {docTypes ? docTypes.filter((dt) => !dt.isDeleted).map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row"><Typography variant="h6">{row.name}</Typography></TableCell>
                <TableCell align="center"><Typography variant="h6">{row.author}</Typography></TableCell>
                <TableCell align="center"><Typography variant="h6">{row.isRequired ? 'Yes' : 'No'}</Typography></TableCell>
                <TableCell align="center"><Typography variant="h6">{row.isActive ? 'Yes' : 'No'}</Typography></TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleEditDocType(row)}><EditIcon /></Button>
                  <Button onClick={() => handleDeleteDocType(row)}><DeleteIcon /></Button>
                </TableCell>
              </TableRow>
            )) : <></>}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  const _renderForm = () => {
    if (!pageLoadingState) {
      return (
        <div>
          <CircularProgress />
        </div>
      );
    }
    return (
      <div>
        {
          settingType === 0
          && (
            _renderDocTypeSettingForm()
          )
        }
        {
          settingType === 1
          && (
            _renderUserSettingForm()
          )
        }
      </div>
    );
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
        <IconButton href={routeLink.crypto.home} className={clsx(classes.backtohome, classes.invert)}>
          <i className="ion-ios-home-outline" />
          <i className="ion-ios-arrow-thin-left" />
        </IconButton>
        <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
          <div className={classes.fullFromWrap}>
            <div className={classes.form}>
              <Grid container spacing={4} direction="row">
                <Grid item md={12} xs={12}>
                  <Button variant={settingType === 1 ? 'outlined' : 'contained'} style={{ marginRight: theme.spacing(2) }} size="large" color="secondary" onClick={() => setSettingType(0)}>
                    Document Type Setting
                  </Button>
                  <Button variant={settingType === 0 ? 'outlined' : 'contained'} size="large" color="secondary" onClick={() => setSettingType(1)}>
                    User Management
                  </Button>
                </Grid>
              </Grid>
              { _renderForm() }
            </div>
          </div>
          {_renderDocTypeModal()}
          {_renderUserModal()}
        </Paper>
      </Container>
    </div>
  );
}

NewRequest.propTypes = {
  // t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(NewRequest);
