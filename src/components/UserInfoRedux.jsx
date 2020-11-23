import {Paper, Typography} from '@material-ui/core';
import React, { useState } from 'react';
import * as styles from './UserInfo.css';
import Button from "@material-ui/core/Button";
import {updateEmail} from "../redux/actions/users";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";

const getCurrentUser = (state) => state.currentUser;
const mapStateToProps = state => ({ currentUser: getCurrentUser(state) });
const mapDispatchToProps = dispatch => ({ updateEmail: email => dispatch(updateEmail(email)) });

const UserInfoReduxComponent = ({ currentUser, updateEmail }) => {
  const [showDetails, setShowDetails] = useState(false);

  const renderUserDetails = () => (
    <div className={styles.details}>
      <Typography variant="h5">Details</Typography>
      <p>Login: {currentUser.login}</p>
      <p>Age: {currentUser.age}</p>
      <TextField type="text" label="Email" value={currentUser.email} onChange={changeEmail} />
    </div>
  )

  const getUserFullName = () => `${currentUser.name} ${currentUser.lastName}`;
  const toggleDetails = () => setShowDetails(!showDetails);
  const changeEmail = (event) => updateEmail(event.target.value);

  return (
    <Paper square={true} className={styles.paper}>
      <Typography variant="h4">Info about user: {getUserFullName()}</Typography>
      <p>First name: {currentUser.name}</p>
      <p>Last name: {currentUser.lastName}</p>
      <Button style={{'border': '1px solid grey'}} onClick={toggleDetails}>{showDetails ? 'Hide' : 'Show'} user details</Button>
      {showDetails && renderUserDetails()}
    </Paper>
  );
};
export const UserInfoRedux = connect(mapStateToProps, mapDispatchToProps)(UserInfoReduxComponent);
