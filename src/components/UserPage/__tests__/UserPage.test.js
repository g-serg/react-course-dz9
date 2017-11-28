import React from 'react';
import UserPage from '../../UserPage';
import {shallow} from 'enzyme';
import Spinner from 'react-svg-spinner';
import {wrap} from 'module';
import Followers from '../../Followers';

describe('Component UserPage', () => {
  const wrapper = shallow(<UserPage />);

  describe('check presence of instance methods', () => {
    it('have componentDidMount method', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('have componentWillReceiveProps method', () => {
      expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
    });
  });

  describe('render', () => {
    it('should be Spinner on isFetching === true', () => {
      const wrapper = shallow(<UserPage isFetching="true" />);
      expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('should be p{User not found} on isFetching === false & user = null', () => {
      const wrapper = shallow(<UserPage isFetching="false" user="null" />);
      expect(wrapper.find('p').contains('User not found')).toBeTruthy();
    });

    it('should be .user_info__avatar > img', () => {
      expect(wrapper.find('.user_info__avatar>img')).toHaveLength(1);
    });

    it('should be .user_info__login > h3 equal props.login', () => {
      const wrapper = shallow(<UserPage login="user_login" />);
      expect(wrapper.find('.user_info__login>h3').text()).toEqual('user_login');
    });

    it('should be Followers will be equal props followers', () => {
      const followers = [1, 2, 3];
      const wrapper = shallow(<UserPage followers={followers} />);

      expect(
        wrapper
          .find('.user_info__login>p')
          .at(0)
          .text()
      ).toEqual('Followers: 3');
    });

    it('should Followers with props login', () => {
      const wrapper = shallow(<UserPage login="user_login" />);
      expect(
        wrapper
          .find(Followers)
          .at(0)
          .props()['login']
      ).toEqual('user_login');
    });
  });
});
