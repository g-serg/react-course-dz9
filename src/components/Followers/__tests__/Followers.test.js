import React from 'react';
import {Followers} from '../../Followers/Followers';
import {shallow} from 'enzyme';
import Spinner from 'react-svg-spinner';
import Follower from '../../Follower';

describe('Component Followers', () => {
  const wrapper = shallow(<Followers />);
  const ids = {
    followers: [1, 2, 3].map(f => ({id: f, login: `user${f}`}))
  };

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

    it('should be Follower equal {ids.followers}', () => {
      const wrapper = shallow(<Followers ids={ids} />);
      expect(wrapper.find(Follower)).toHaveLength(3);
    });
  });
});
