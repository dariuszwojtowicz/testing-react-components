import {AppBar, Toolbar} from '@material-ui/core';
import * as React from 'react';
import styles from './App.css';
import { UserInfoBasic } from "./UserInfoBasic";
import {UserInfoRedux} from "./UserInfoRedux";
import {UserInfoReduxRouter} from "./UserInfoReduxRouter";
import {UserInfoReduxRouterTs} from "./UserInfoReduxRouterTs";
import {BrowserRouter, Route, Switch} from "react-router-dom";

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
      Basic
      <UserInfoBasic user={user} />
      <hr />
      Redux
      <UserInfoRedux />
      <hr />
      Redux and Router
      <BrowserRouter>
         <Switch>
          <Route exact path="/profile" component={UserInfoReduxRouter} />
          <Route exact path="/users/:id" component={UserInfoReduxRouter} />
        </Switch>
      </BrowserRouter>
      <hr />
      Redux, Router and Typescript
      <BrowserRouter>
        <Switch>
          <Route exact path="/profile" component={UserInfoReduxRouterTs} />
          <Route exact path="/users/:id" component={UserInfoReduxRouterTs} />
        </Switch>
      </BrowserRouter>
    </main>
  </div>
);
