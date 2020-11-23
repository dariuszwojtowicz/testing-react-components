import {mount} from 'enzyme';
import React from 'react';
import Button from "@material-ui/core/Button";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {userData, usersData} from "../../redux/reducers/users";
import {createLocation} from 'history';
import {UserInfoReduxRouterTs} from "../UserInfoReduxRouterTs";
import {MemoryRouter} from "react-router";

const getStore = () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    currentUser: userData,
    users: usersData
  });
  const dispatchMock = (): any => Promise.resolve({
    currentUser: null,
    users: null
  });
  store.dispatch = jest.fn(dispatchMock);
  return store;
}

describe('UserInfoReduxRouterTs', () => {

  describe('Profile page', () => {
    const path = `/profile`;
    const store = getStore();
    const wrapper = mount(
      <MemoryRouter initialEntries={[path]}>
        <Provider store={store}>
          <UserInfoReduxRouterTs />
        </Provider>
      </MemoryRouter>,
    { context: { store } }
    );

    describe('Initial state', () => {
      test('should render header with full name of current user', () => {
        expect(wrapper
          .findWhere(
            (n) => n.text().includes('Info about user:')
          ).find('h4').text()
        )
          .toContain('Darek Wójtowicz (id: 1)');
      });
    });

    describe(`After 'Show user details' button click`, () => {
      wrapper.find(Button).simulate('click');
      test(`should update user email in store after input value change`, () => {
        // when
        wrapper.find('input').simulate('change', { target: { value: 'new@email.com' }});

        // then
        expect(store.dispatch).toHaveBeenCalledWith( {
          email: "new@email.com",
          type: "UPDATE_EMAIL"
        });
      });
    });
  });

  describe('Users page', () => {
    const path = `/users/2`;
    const store = getStore();
    const wrapper = mount(
      <MemoryRouter initialEntries={[path]}>
        <Provider store={store}>
          <UserInfoReduxRouterTs />
        </Provider>
      </MemoryRouter>,
      { context: { store } }
    );
    describe('Initial state', () => {
      test('should render header with full name of user with id 2', () => {
        expect(wrapper
          .findWhere(
            (n) => n.text().includes('Info about user:')
          ).find('h4').text()
        )
          .toContain('John Random (id: 2)');
      });
    });

    describe(`After 'Show user details' button click`, () => {
      wrapper.find(Button).simulate('click');
      test(`should not update user email on users page`, () => {
        // when
        wrapper.find('input').simulate('change', { target: { value: 'new@email.com' }});

        // then
        expect(store.dispatch).toBeCalledTimes(0);
      });
    });
  });
});

