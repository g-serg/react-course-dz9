import React from 'react';
import {Link} from 'react-router-dom';
import Follower from '../../Follower';
import {shallow} from 'enzyme';

describe('Component Follower', () => {
  const props = {
    img: 'img_url',
    login: 'user_login'
  };
  const wrapper = shallow(<Follower {...props} />);

  describe('render', () => {
    it('should be .follower_item>.follower_item__avatar>img.src = {props.img}', () => {
      expect(
        wrapper
          .find('.follower_item>.follower_item__avatar>img')
          .at(0)
          .props()['src']
      ).toEqual(props.img);
    });

    it('should be Link with to = /user/{props.login}', () => {
      expect(
        wrapper
          .find(Link)
          .at(0)
          .props()['to']
      ).toEqual('/user/' + props.login);
    });

    it('should be .follower_item>.follower_item__url h3 = /user/{props.login}', () => {
      expect(
        wrapper
          .find('.follower_item>.follower_item__url h3')
          .at(0)
          .text()
      ).toEqual(props.login);
    });
  });
});
