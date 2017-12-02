import React, {Component} from 'react';
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import UserPage from '../UserPage';
import AuthPage from '../AuthPage';
import {getIsAuthorized} from '../../reducers/auth';
import {getIsNetworkErrorPresent} from '../../reducers/network';
import Logout from '../Logout';
import NetworkError from '../NetworkError';
import './AppRouter.css';

export class AppRouter extends Component {
  render() {
    const {isAuthorized, isNetworkErrorPresent} = this.props;

    return (
      <div>
        {isAuthorized && <Logout />}
        {isNetworkErrorPresent && <NetworkError />}
        <Switch>
          <PrivateRoute path="/user/me" component={UserPage} />
          <PrivateRoute path="/user/:user" component={UserPage} />
          <Route path="/login" exact component={AuthPage} />
          <Redirect to="/user/dex157" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isAuthorized: getIsAuthorized(store),
  isNetworkErrorPresent: getIsNetworkErrorPresent(store),
});

export default withRouter(connect(mapStateToProps)(AppRouter));
