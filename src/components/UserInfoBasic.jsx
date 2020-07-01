import {Paper, Typography} from '@material-ui/core';
import React, { useState } from 'react';
import * as styles from './UserInfo.css';
import Button from "@material-ui/core/Button";

export const UserInfoBasic = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const renderUserDetails = () => (
    <div id="userDetails" className={styles.details}>
      <Typography variant="h5">Details</Typography>
      <p>Login: {user.login}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  )

  const getUserFullName = () => `${user.name} ${user.lastName}`;
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <Paper square={true} className={styles.paper}>
      <Typography variant="h4">Info about user: {getUserFullName()}</Typography>
      <p>First name: {user.name}</p>
      <p>Last name: {user.lastName}</p>
      <Button style={{'border': '1px solid grey'}} onClick={toggleDetails}>{showDetails ? 'Hide' : 'Show'} user details</Button>
      {showDetails && renderUserDetails()}
    </Paper>
  );
};
