import React, { Fragment } from 'react';
import Head from 'next/head';
import brand from '../static/text/brand';
import LoginForm from '../components/Forms/Login';
import Notification from '../components/Notification';

function Login() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.crypto.name }
          &nbsp; - Login
        </title>
      </Head>
      <div>
        <LoginForm />
      </div>
      <Notification />
    </Fragment>
  );
}

Login.getInitialProps = async () => ({
  namespacesRequired: ['common', 'hosting-landing'],
});

export default Login;
