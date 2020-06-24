import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import {UserInfoBasic} from "../UserInfoBasic";
import {Typography} from "@material-ui/core";

describe('UserInfoBasic', () => {

  const wrapper = shallow(
    <UserInfoBasic
    />
  );

  test('should render info', () => {
    expect(wrapper.find(Typography).text()).toContain('This is user info basic component!');
  });
});
