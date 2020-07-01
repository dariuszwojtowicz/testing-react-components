import {mount} from 'enzyme';
import React from 'react';
import {UserInfoRedux} from "../UserInfoRedux";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';

const user = {
  name: 'Darek',
  lastName: 'Wójtowicz',
  age: 28,
  login: 'dariuszwojtowicz',
  email: 'dariusz.wojtowicz@hotmail.com'
};
const mockStore = configureStore([]);
const dispatchMock = () => Promise.resolve({});
const store = mockStore({
  currentUser: user
});
store.dispatch = jest.fn(dispatchMock);

describe('UserInfoBasic', () => {
  describe('Initial state', () => {
    const wrapper = mount(
      <Provider store={store}>
        <UserInfoRedux />
      </Provider>,
      { context: { store } }
    );

    test('should render header with full name', () => {
      expect(wrapper.find(Typography).text()).toContain('Info about user: Darek Wójtowicz');
    });

    test('should not render details', () => {
      expect(wrapper.find('#userDetails').length).toEqual(0);
    });

    test(`should render 'Show user details' button`, () => {
      expect(wrapper.find(Button).text()).toEqual('Show user details');
    });
  });

  describe(`After 'Show user details' button click`, () => {
    const wrapper = mount(
      <Provider store={store}>
        <UserInfoRedux />
      </Provider>,
      { context: { store } }
    );
    wrapper.find(Button).simulate('click');

    test(`should render details`, () => {
      expect(wrapper.find('#userDetails').length).toEqual(1);
    });

    test(`should render 'Hide user details' button`, () => {
      expect(wrapper.find(Button).text()).toEqual('Hide user details');
    });

    test(`should render 'Hide user details' button`, () => {
      // when
      wrapper.find('input#email').simulate('change', { target: { value: 'new@email.com' }});

      // then
      expect(store.dispatch).toHaveBeenCalledWith( {
        email: "new@email.com",
        type: "UPDATE_EMAIL"
      });
    });
  });
});
