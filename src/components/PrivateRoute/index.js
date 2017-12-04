import React, {PureComponent} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuthorized} from '../../reducers/auth';

class PrivateRoute extends PureComponent {
  render() {
    const {isAuthorized, component: Component, ...rest} = this.props;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthorized ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}

export default connect(store => ({
  isAuthorized: getIsAuthorized(store)
}))(PrivateRoute);
