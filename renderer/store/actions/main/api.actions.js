// import * as api from '../../../api';

export const SET_API_BUSY = '[NOTIFICATION] SET_API_BUSY';

export const setApiBusy = (isBusy) => ({
  type: SET_API_BUSY,
  isBusy
});
