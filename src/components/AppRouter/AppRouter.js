import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import AuthPage from '../AuthPage';
import './AppRouter.css';

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <PrivateRoute path="/user/:name" />
          <Route path="/login" exact component={AuthPage} />
          <Redirect to="/user/dex157" />
        </Switch>
      </div>
    );
  }
}

export default AppRouter;
