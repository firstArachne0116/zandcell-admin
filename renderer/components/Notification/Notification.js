import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Slide from '@material-ui/core/Slide';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './notification-style';
import { withTranslation } from '../../i18n';
import * as Actions from '../../store/actions/main';
// import msg from '../../static/text/brand';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Notification(props) {
  const dispatch = useDispatch();
  const { t } = props;
  const classes = useStyles();
  // const [open, setOpen] = useState(false);
  const showNotification = useSelector(state => state.main.notificationReducer.showNotification);
  const notificationContent = useSelector(state => state.main.notificationReducer.notificationContent);
  // useEffect(() => {
  //   if(showNotification) {

  //   }
  // }, [showNotification]);
  const handleClose = () => {
    dispatch(Actions.hideNotification());
    // setOpen(false);
  };
  return (
    <Snackbar
      TransitionComponent={TransitionUp}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      autoHideDuration={null}
      classes={{
        root: classes.notification,
      }}
      open={showNotification}
      onClose={handleClose}
    >
      <SnackbarContent
        message={<Typography id="message-id">{notificationContent}</Typography>}
        classes={{
          action: classes.action
        }}
        action={(
          <Button color="secondary" variant="contained" className={classes.button} onClick={handleClose}>
            {t('common:okay')}
          </Button>
        )}
      />
    </Snackbar>
  );
}

Notification.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common'])(Notification);
