import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';
import AuthPage from '../AuthPage';
import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute path="/user/:name" component={UserPage} />
        <Route path="/login" exact component={AuthPage} />
        <Redirect to="/user/dex157" />
      </Switch>
    );
  }
}

export default AppRouter;
