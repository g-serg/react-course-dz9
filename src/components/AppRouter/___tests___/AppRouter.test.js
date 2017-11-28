import React from 'react';
import AppRouter from '../../AppRouter';
import PrivateRoute from '../../PrivateRoute';
import {Switch, Route, Redirect} from 'react-router-dom';
import {shallow} from 'enzyme';

describe('component AppRouter', () => {
  const wrapper = shallow(<AppRouter />);

  it('should exists Switch component', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('should exists PrivateRoute component', () => {
    expect(wrapper.find(PrivateRoute)).toHaveLength(1);
  });

  it('should exists Route with path=/login', () => {
    expect(
      wrapper
        .find(Route)
        .at(0)
        .props()['path']
    ).toEqual('/login');
  });

  it('should exists Redirect with redirect to /user/dex157', () => {
    expect(
      wrapper
        .find(Redirect)
        .at(0)
        .props()['to']
    ).toEqual('/user/dex157');
  });
});
