import {mount} from 'enzyme';
import React from 'react';
import Button from "@material-ui/core/Button";
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import {UserInfoReduxRouter} from "../UserInfoReduxRouter";
import {userData, usersData} from "../../redux/reducers/users";
import {createLocation} from 'history';

const getStore = () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    currentUser: userData,
    users: usersData
  });
  const dispatchMock = () => Promise.resolve({});
  store.dispatch = jest.fn(dispatchMock);
  return store;
}

describe('UserInfoReduxRouter', () => {

  describe('Profile page', () => {
    const path = `/profile`;
    const match = {
      isExact: true,
      path,
      url: path
    };
    const location = createLocation(match.url);
    const store = getStore();
    const wrapper = mount(
      <Provider store={store}>
        <UserInfoReduxRouter
          match={match}
          location={location}
        />
      </Provider>,
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
    const path = `/users/:id`;
    const match = {
      isExact: true,
      path,
      url: path.replace(':id', '2'),
      params: { id: '2' }
    };
    const location = createLocation(match.url);
    const store = getStore();
    const wrapper = mount(
      <Provider store={store}>
        <UserInfoReduxRouter
          match={match}
          location={location}
        />
      </Provider>,
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

