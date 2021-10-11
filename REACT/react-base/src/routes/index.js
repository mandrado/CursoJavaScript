import React from 'react';
import { Switch } from 'react-router-dom';
import Login from '../pages/login';
import Page404 from '../pages/Page404';
import MyRoute from './MyRoute';

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/" component={Login} isClosed />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
