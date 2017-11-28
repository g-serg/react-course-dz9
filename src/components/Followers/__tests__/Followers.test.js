import React from 'react';
import Followers from '../../Followers';
import {shallow} from 'enzyme';
import Spinner from 'react-svg-spinner';
import Follower from '../../Follower';

describe('Component Followers', () => {
  const wrapper = shallow(<Followers />);

  describe('check presence of instance methods', () => {
    it('have componentDidMount method', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
    });
  });

  describe('render', () => {
    it('should be Spinner on isFetching === true', () => {
      const wrapper = shallow(<Followers isFetching="true" />);
      expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should be Follower equal props followers', () => {
      const followers = [{login: 1}, {login: 2}, {login: 3}];
      const wrapper = shallow(<Followers followers={followers} />);
      expect(wrapper.find(Follower)).toHaveLength(3);
    });
  });
});
