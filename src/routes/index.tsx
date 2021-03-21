import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/Reset';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Routes';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
