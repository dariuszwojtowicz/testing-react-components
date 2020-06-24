import {AppBar, Toolbar} from '@material-ui/core';
import * as React from 'react';
import styles from './App.css';
import { UserInfoBasic } from "./UserInfoBasic";

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
      <UserInfoBasic />
    </main>
  </div>
);
