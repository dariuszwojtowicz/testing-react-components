import {Paper, Typography} from '@material-ui/core';
import React, { useState } from 'react';
import * as styles from './UserInfo.css';
import Button from "@material-ui/core/Button";
import {updateEmail, UpdateEmailAction} from "../redux/actions/users";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import {RootState} from "../redux/reducers";
import {Dispatch} from "redux";
import {match as Match, withRouter} from 'react-router';
import {User} from "../models/User";
import {Location} from 'history';

const getCurrentUser = (state: RootState) => state.currentUser;
const getUsers = (state: RootState) => state.users;
const mapStateToProps = (state: RootState) => ({
  currentUser: getCurrentUser(state),
  users: getUsers(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({ updateEmail: (email: string) => dispatch(updateEmail(email)) });

export interface UserInfoReduxRouterTsProps {
  currentUser: User;
  users: User[];
  updateEmail: (email: string) => UpdateEmailAction;
  location: Location;
}

const UserInfoReduxRouterTsComponent: React.FC<UserInfoReduxRouterTsProps> = (
{ currentUser, users, updateEmail, location }
) => {
  const [showDetails, setShowDetails] = useState(false);

  const renderUserDetails = () => (
    <div id="userDetails" className={styles.details}>
      <Typography variant="h5">Details</Typography>
      <p>Login: {userData.login}</p>
      <p>Age: {userData.age}</p>
      <TextField
        fullWidth
        id="email"
        type="text"
        label="Email"
        value={userData.email}
        onChange={changeEmail}
        disabled={location.pathname !== '/profile'}
      />
    </div>
  )

  const getUserFullName = () => `${userData.name} ${userData.lastName}`;
  const toggleDetails = () => setShowDetails(!showDetails);
  const changeEmail = (event: React.ChangeEvent<any>) => {
    if (location.pathname === '/profile') {
      updateEmail(event.target.value);
    }
  }
  const getUserId = (): number => parseInt(location.pathname.split('users/')[1], 10);

  let userData: User = null;
  if (location.pathname === '/profile') {
    userData = currentUser;
  } else {
    const foundUser = users.find((user: User) => user.id == getUserId());
    if (foundUser) {
      userData = foundUser;
    }
  }

  const renderUserInfo = () => (
    <>
      <Typography id="header" variant="h4">Info about user: {getUserFullName()} (id: {userData.id})</Typography>
      <p>First name: {userData.name}</p>
      <p>Last name: {userData.lastName}</p>
      <Button style={{'border': '1px solid grey'}} onClick={toggleDetails}>{showDetails ? 'Hide' : 'Show'} user
        details</Button>
      {showDetails && renderUserDetails()}
    </>
  );

  return (
    <Paper square={true} className={styles.paper}>
      {userData && renderUserInfo()}
      {!userData && <h3>User with id {getUserId()} does not exist</h3>}
    </Paper>
  );
};
export const UserInfoReduxRouterTs = withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInfoReduxRouterTsComponent));
