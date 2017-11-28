import React from 'react';
import Follower from '../../Follower';
import {shallow} from 'enzyme';

describe('Component Follower', () => {
  const wrapper = shallow(<Follower />);
  const props = {
    img: 'img_url',
    login: 'user_login'
  };

  describe('render', () => {
    it('should be .followers>.followers_avatar>img.src = {user.img}', () => {
      const wrapper = shallow(<Follower img={props.img} />);
      expect(
        wrapper
          .find('.followers>.followers_avatar>img')
          .at(0)
          .props()['src']
      ).toEqual(props.img);
    });

    it('should be .followers>.followers_url>a.href = /user/{user.login}', () => {
      const wrapper = shallow(<Follower login={props.login} />);
      expect(
        wrapper
          .find('.followers>.followers_url>a')
          .at(0)
          .props()['href']
      ).toEqual('/user/' + props.login);
    });

    it('should be .followers>.followers_url h3 = /user/{user.login}', () => {
      const wrapper = shallow(<Follower login={props.login} />);
      expect(
        wrapper
          .find('.followers>.followers_url h3')
          .at(0)
          .text()
      ).toEqual(props.login);
    });
  });
});
