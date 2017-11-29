import React from 'react';
import {UserPage} from '../../UserPage/UserPage';
import {shallow} from 'enzyme';
import Spinner from 'react-svg-spinner';
import Followers from '../../Followers';

describe('Component UserPage', () => {
  const wrapper = shallow(<UserPage />);

  describe('check presence of instance methods', () => {
    it('1. have componentDidMount method', () => {
      expect(wrapper.instance().componentDidMount).toBeDefined();
    });

    it('2. have componentWillReceiveProps method', () => {
      expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
    });
  });

  describe('render', () => {
    const data = {
      avatar_url: 'user_url',
      followers: 3
    };
    const match = {
      params: {
        name: 'user_login'
      }
    };

    it('1. should be Spinner on isFetching', () => {
      const wrapper = shallow(<UserPage isFetching />);
      expect(wrapper.find(Spinner)).toHaveLength(1);
    });

    it('2. should be p{User not found} on !isFetching & !data', () => {
      const wrapper = shallow(<UserPage isFetching={false} />);
      expect(wrapper.find('p').contains('User not found')).toBeTruthy();
    });

    it('3. should be .user_info__avatar>img.src equal {data.avatar_url}', () => {
      const wrapper = shallow(<UserPage data={data} />);
      expect(
        wrapper
          .find('.user_info__avatar>img')
          .at(0)
          .props()['src']
      ).toEqual(data.avatar_url);
    });

    it('4. should be .user_info__login>h3 equal {match.param.name}', () => {
      const wrapper = shallow(<UserPage data={data} match={match} />);
      expect(
        wrapper
          .find('.user_info__login>h3')
          .at(0)
          .text()
      ).toEqual(match.params.name);
    });

    it('5. should be Followers will be equal props {data.followers}', () => {
      const wrapper = shallow(<UserPage data={data} />);
      expect(
        wrapper
          .find('.user_info__login>p')
          .at(0)
          .text()
      ).toEqual('Followers: 3');
    });

    it('6. should Followers with props login', () => {
      const wrapper = shallow(<UserPage data={data} match={match} />);
      expect(
        wrapper
          .find(Followers)
          .at(0)
          .props()['login']
      ).toEqual(match.params.name);
    });
  });
});
