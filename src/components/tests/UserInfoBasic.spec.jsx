import {mount} from 'enzyme';
import React from 'react';
import {UserInfoBasic} from "../UserInfoBasic";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const user = {
  name: 'Darek',
  lastName: 'Wójtowicz',
  age: 28,
  login: 'dariuszwojtowicz',
  email: 'dariusz.wojtowicz@hotmail.com'
};

describe('UserInfoBasic', () => {
  describe('Initial state', () => {
    const wrapper = mount(
      <UserInfoBasic user={user} />
    );

    test('should render header with full name', () => {
      expect(wrapper.find(Typography).text()).toContain('Info about user: Darek Wójtowicz');
    });

    test('should not render details', () => {
      expect(wrapper.findWhere((n) => n.text() === 'Login: dariuszwojtowicz').length).toEqual(0);
    });

    test(`should render 'Show user details' button`, () => {
      expect(wrapper.find(Button).text()).toEqual('Show user details');
    });
  });

  describe(`After 'Show user details' button click`, () => {
    const wrapper = mount(
      <UserInfoBasic user={user} />
    );
    wrapper.find(Button).simulate('click');

    test(`should render details`, () => {
      expect(wrapper.findWhere((n) => n.text() === 'Login: dariuszwojtowicz').length).toEqual(1);
    });

    test(`should render 'Hide user details' button`, () => {
      expect(wrapper.find(Button).text()).toEqual('Hide user details');
    });
  });
});
