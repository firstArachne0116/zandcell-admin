import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
// import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useDispatch, useSelector } from 'react-redux';
import routeLink from '../../static/text/link';
import { withTranslation } from '../../i18n';
import { useText } from '../../theme/common';
import Parallax from '../Parallax/Hexagonal';
import Decoration from './Decoration';
import useStyles from './form-style';

import * as Actions from '../../store/actions/main';

function NewRequest() {
  const classes = useStyles();
  const text = useText();
  const dispatch = useDispatch();
  // const { t } = props;
  // const theme = useTheme();
  const [pageLoadingState, setPageLoadingState] = useState(false);
  const steps = ['Basic Information', 'Upload document', 'Finish'];
  const [activeStep, setActiveStep] = React.useState(0);
  const stepButtonLabels = ['Proceed to Upload documents', 'Finish Editing', 'Submit Request'];
  const [values, setValues] = useState({
    requestType: 'buy',
    description: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    product: '',
    model: '',
    priceMax: '',
    priceMin: '',
    commisssion: '',
    delivery: '',
  });
  const [openNotif, setNotif] = useState(false);
  // const [check, setCheck] = useState(false);

  const docTypes = useSelector(state => state.main.settingReducer.docTypes);
  // const userData = useSelector(state => state.main.authReducerdecodedToken);

  useEffect(() => {
    console.log(pageLoadingState);
    if (!pageLoadingState) {
      console.log('load page data');
      dispatch(Actions.getDocTypes());
    }
  }, []);

  useEffect(() => {
    if (pageLoadingState) {
      console.log('page data loaded');
    }
  }, [pageLoadingState]);

  useEffect(() => {
    if (!pageLoadingState && docTypes.length > 0) {
      console.log(docTypes);
      setPageLoadingState(true);
    }
  }, [docTypes]);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // const handleCheck = event => {
  //   setCheck(event.target.checked);
  // };

  // const handleSubmit = () => {
  //   setNotif(true);
  // };

  const handleClose = () => {
    setNotif(false);
  };

  //= ==========STEPPER==============
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  const _renderBaseInfoForm = () => (
    <Grid container spacing={4}>
      <Grid item md={12} xs={12}>
        <FormControlLabel name="RequestType" value="buy" control={<Radio checked={values.requestType === 'buy'} />} label="I want Buy" onChange={handleChange('requestType')} />
        <FormControlLabel name="RequestType" value="sell" control={<Radio checked={values.requestType === 'sell'} />} label="I want Sell" onChange={handleChange('requestType')} />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          variant="filled"
          className={classes.input}
          label="Product Name*"
          onChange={handleChange('product')}
          name="Product"
          value={values.product}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          variant="filled"
          className={classes.input}
          label="Model or Type of Product"
          onChange={handleChange('model')}
          name="Model"
          value={values.model}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          variant="filled"
          className={classes.input}
          label="Quantity*"
          onChange={handleChange('quantity')}
          name="Quantity"
          value={values.quantity}
        />
      </Grid>
      <Grid item md={4} xs={12}>
        <TextField
          variant="filled"
          className={classes.input}
          label={values.requestType === 'sell' ? 'Price*' : 'Min Price*'}
          onChange={handleChange('priceMin')}
          name="PriceMin"
          value={values.priceMin}
        />
      </Grid>
      {
        values.requestType === 'buy'
        && (
          <Grid item md={4} xs={12}>
            <TextField
              variant="filled"
              className={classes.input}
              label="Max Price*"
              onChange={handleChange('priceMax')}
              name="PriceMax"
              value={values.priceMax}
            />
          </Grid>
        )
      }
      <Grid item md={4} xs={12}>
        <TextField
          variant="filled"
          className={classes.input}
          label="Commission* (e.g. 10% or 2k USD)"
          onChange={handleChange('commisssion')}
          name="Commission"
          value={values.commisssion}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          multiline
          rows="2"
          className={classes.input}
          label="Delivery location*"
          onChange={handleChange('delivery')}
          name="Delivery"
          value={values.delivery}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="filled"
          multiline
          rows="6"
          className={classes.input}
          label="Write detailed description about your document."
          onChange={handleChange('description')}
          name="Description"
          value={values.description}
        />
      </Grid>
    </Grid>
  );

  const _renderDocumentsForm = () => (
    <div>
      <Grid container md={3}>
        <Grid item md={12} xs={8}>
          <FormControlLabel name="RequestType" value="buy" control={<Radio checked={values.requestType === 'buy'} />} label="I want Buy" onChange={handleChange('requestType')} />
          <FormControlLabel name="RequestType" value="sell" control={<Radio checked={values.requestType === 'sell'} />} label="I want Sell" onChange={handleChange('requestType')} />
        </Grid>
      </Grid>
      <Grid container md={9}>
        <Grid item md={12} xs={8}>
          {/* <FormControlLabel name="RequestType" value="buy" control={<Radio checked={values.requestType === 'buy'} />} label="I want Buy" onChange={handleChange('requestType')} /> */}
          {/* <FormControlLabel name="RequestType" value="sell" control={<Radio checked={values.requestType === 'sell'} />} label="I want Sell" onChange={handleChange('requestType')} /> */}
        </Grid>
      </Grid>
    </div>
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
          activeStep === 0
          && (
            _renderBaseInfoForm()
          )
        }
        {
          activeStep === 1
          && (
            _renderDocumentsForm()
          )
        }
      </div>
    );
  };

  return (
    <div className={classes.pageWrap}>
      <Decoration />
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
              variant="h3"
              align="center"
              className={clsx(classes.title, text.title)}
              gutterBottom
            >
              Say What You Want to Us
            </Typography>
            <Typography className={clsx(classes.desc, text.subtitle2)}>
              Please input valid information so that we can support you :)
            </Typography>
            <Stepper activeStep={activeStep}>
              {steps.map((label) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            <div className={classes.form}>
              { _renderForm() }
              <div className={clsx(classes.btnArea, classes.flex)}>
                {
                  activeStep !== 0
                  && (
                    <Button variant="contained" size="large" onClick={handleBack}>
                      Back
                    </Button>
                  )
                }
                <Button variant="contained" color="secondary" size="large" onClick={handleNext}>
                  {stepButtonLabels[activeStep]}
                </Button>
              </div>
              <div className={clsx(classes.btnArea, classes.flex)}>
                {/* <FormControlLabel
                  control={
                    <Checkbox checked={check} onChange={(e) => handleCheck(e)} color="primary" value="check" />
                  }
                  label={(
                    <span>
                      {t('common:form_terms')}
                      <br />
                      <a href="#">
                        {t('common:form_privacy')}
                      </a>
                    </span>
                  )}
                /> */}
                {/* <Button variant="contained" type="submit" color="secondary" size="large">
                  {t('common:form_send')}
                </Button> */}
              </div>
            </div>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

NewRequest.propTypes = {
  // t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(NewRequest);
