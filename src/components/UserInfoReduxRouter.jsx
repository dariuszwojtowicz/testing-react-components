import {Paper, Typography} from '@material-ui/core';
import React, { useState } from 'react';
import * as styles from './UserInfo.css';
import Button from "@material-ui/core/Button";
import {updateEmail} from "../redux/actions/users";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";

const getCurrentUser = (state) => state.currentUser;
const getUsers = (state) => state.users;
const mapStateToProps = state => ({
  currentUser: getCurrentUser(state),
  users: getUsers(state)
});
const mapDispatchToProps = dispatch => ({ updateEmail: email => dispatch(updateEmail(email)) });

const UserInfoReduxRouterComponent = ({ currentUser, users, updateEmail, location, match }) => {
  const [showDetails, setShowDetails] = useState(false);

  const renderUserDetails = () => (
    <div className={styles.details}>
      <Typography variant="h5">Details</Typography>
      <p>Login: {userData.login}</p>
      <p>Age: {userData.age}</p>
      <TextField
        fullWidth
        type="text"
        label="Email"
        value={userData.email}
        onChange={changeEmail}
        disabled={location.pathname !== '/profile'}
      />
    </div>
  );

  const getUserFullName = () => `${userData.name} ${userData.lastName}`;
  const toggleDetails = () => setShowDetails(!showDetails);
  const changeEmail = (event) => {
    if (location.pathname === '/profile') {
      updateEmail(event.target.value);
    }
  };
  const getUserData = () => {
    if (location.pathname === '/profile') {
      return currentUser;
    } else {
      const foundUser = users.find((user) => user.id == match.params.id);
      if (foundUser) {
        return foundUser;
      }
    }
    return null;
  };

  const userData = getUserData();

  const renderUserInfo = () => (
    <>
      <Typography variant="h4">Info about user: {getUserFullName()} (id: {userData.id})</Typography>
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
      {!userData && <h3>User with id {match.params.id} does not exist</h3>}
    </Paper>
  );
};
export const UserInfoReduxRouter = connect(mapStateToProps, mapDispatchToProps)(UserInfoReduxRouterComponent);
