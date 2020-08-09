import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useDispatch, useSelector } from 'react-redux';

import { withTranslation } from '../../i18n';
import routeLink from '../../static/text/link';
import { useText } from '../../theme/common';
import Title from '../Title/TitleSecondary';
import AuthFrame from './AuthFrame';
import useStyles from './form-style';
import * as Actions from '../../store/actions/main';

function Register(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const classes = useStyles();
  const accessToken = useSelector((state) => state.main.authReducer.access_token);

  const text = useText();
  const { t } = props;
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== values.password) {
        return false;
      }
      return true;
    });
  });

  const onSignSuccess = () => {
    router.push('/');
  };

  useEffect(() => {
    console.log(accessToken);
    if (accessToken !== '') {
      localStorage.setItem('access_token', accessToken);
      onSignSuccess();
    }
  }, [accessToken]);


  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    console.log('data submited', values);
    dispatch(Actions.signUp({
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password
    }));
  };

  return (
    <AuthFrame title={t('common:register_title')} subtitle={t('common:register_subtitle')}>
      <div>
        <div className={classes.head}>
          <Title align="left">{t('common:register')}</Title>
          <Button size="small" className={classes.buttonLink} href={routeLink.crypto.login}>
            <Icon className={clsx(classes.icon, classes.signArrow)}>arrow_forward</Icon>
            {t('common:register_already')}
          </Button>
        </div>
        <ValidatorForm
          onError={errors => console.log(errors)}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                className={classes.input}
                label={t('common:register_name')}
                onChange={handleChange('name')}
                name="name"
                value={values.name}
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                className={classes.input}
                label={t('common:register_email')}
                onChange={handleChange('email')}
                name="email"
                value={values.email}
                validators={['required', 'isEmail']}
                errorMessages={['This field is required', 'Email is not valid']}
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="filled"
                className={classes.input}
                label={t('common:register_phone')}
                onChange={handleChange('phone')}
                name="phone"
                value={values.phone}
                validators={['required']}
                errorMessages={['This field is required']}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                variant="filled"
                type="password"
                className={classes.input}
                label={t('common:register_password')}
                validators={['required']}
                onChange={handleChange('password')}
                errorMessages={['This field is required']}
                name="password"
                value={values.password}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextValidator
                variant="filled"
                type="password"
                className={classes.input}
                label={t('common:register_confirm')}
                validators={['isPasswordMatch', 'required']}
                errorMessages={['Password mismatch', 'this field is required']}
                onChange={handleChange('confirmPassword')}
                name="confirm"
                value={values.confirmPassword}
              />
            </Grid>
          </Grid>
          <div className={classes.btnArea}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={check}
                  onChange={(e) => handleCheck(e)}
                  color="secondary"
                  value={check}
                  className={classes.check}
                />
              )}
              label={(
                <span className={text.caption}>
                  {t('common:form_terms')}
                  &nbsp;
                  <a href="#">
                    {t('common:form_privacy')}
                  </a>
                </span>
              )}
            />
            <Button variant="contained" fullWidth onClick={handleSubmit} type="submit" color="secondary" size="large">
              {t('common:continue')}
            </Button>
          </div>
        </ValidatorForm>
      </div>
    </AuthFrame>
  );
}


Register.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(Register);
