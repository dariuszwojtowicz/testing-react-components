import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./components/App";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from './redux/reducers/';

const render = (app: React.ReactElement<any>) =>
  ReactDOM.render(
    app,
    document.getElementById('root')
  );

const store = createStore(rootReducer);
// initial render
render(
  <Provider store={store}>
    <App />
  </Provider>
);

// hot module replacement for the main component
if (process.env.DEV_ENV && (module as any).hot) {
  (module as any).hot.accept('./components/App', () => {
    const NextApp = require('./components/App').App;
    console.log('[HOT] Replacing Root component');
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>
    );
  });
}
