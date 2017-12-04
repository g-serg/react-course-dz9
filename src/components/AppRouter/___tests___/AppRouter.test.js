import React from 'react';
import {AppRouter} from '../../AppRouter/AppRouter';
import PrivateRoute from '../../PrivateRoute';
import Logout from '../../Logout';
import NetworkError from '../../NetworkError';
import {Switch, Route, Redirect} from 'react-router-dom';
import {shallow} from 'enzyme';

describe('component AppRouter', () => {
  const wrapper = shallow(<AppRouter />);

  it('1. should exists Switch component', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('2. should exists PrivateRoute component - first with path="/user/me"', () => {
    expect(
      wrapper
        .find(PrivateRoute)
        .at(0)
        .props().path,
    ).toEqual('/user/me');
  });

  it('2a. should exists PrivateRoute component - second with path="/user/:user"', () => {
    expect(
      wrapper
        .find(PrivateRoute)
        .at(1)
        .props().path,
    ).toEqual('/user/:user');
  });

  it('3. should exists Route with path=/login', () => {
    expect(
      wrapper
        .find(Route)
        .at(0)
        .props().path,
    ).toEqual('/login');
  });

  it('4. should exists Redirect with redirect to /user/dex157', () => {
    expect(
      wrapper
        .find(Redirect)
        .at(0)
        .props().to,
    ).toEqual('/user/dex157');
  });

  it('5. should exists component Logout if isAuthorized', () => {
    const wrapper = shallow(<AppRouter isAuthorized />);
    expect(wrapper.find(Logout)).toHaveLength(1);
  });

  it('6. should exists component NetworkError if isNetworkErrorPresent', () => {
    const wrapper = shallow(<AppRouter isNetworkErrorPresent />);
    expect(wrapper.find(NetworkError)).toHaveLength(1);
  });
});
