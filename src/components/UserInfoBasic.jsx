import {Paper, Typography} from '@material-ui/core';
import * as React from 'react';
import * as styles from './UserInfoBasic.css';

export const UserInfoBasic = () => {
  return (
    <Paper square={true} className={styles.paper}>
      <Typography variant="h4">This is user info basic component!</Typography>
    </Paper>
  );
};
