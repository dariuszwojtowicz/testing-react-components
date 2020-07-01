import {AppBar, Toolbar} from '@material-ui/core';
import * as React from 'react';
import styles from './App.css';
import { UserInfoBasic } from "./UserInfoBasic";
import {UserInfoRedux} from "./UserInfoRedux";

const user = {
  name: 'Darek',
  lastName: 'Wójtowicz',
  age: 28,
  login: 'dariuszwojtowicz',
  email: 'dariusz.wojtowicz@hotmail.com'
};

export const App: React.FunctionComponent = () => (
  <div className={styles.container}>
    <AppBar position="sticky" color="inherit" className={styles.appBar}>
      <Toolbar>
        <div className={styles.grow}>
            Testing React Components
         </div>
      </Toolbar>
    </AppBar>
    <main className={styles.main}>
      <UserInfoBasic user={user} />
      <UserInfoRedux />
    </main>
  </div>
);
