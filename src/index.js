// @flow
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import { useStrict } from 'mobx';
import { Provider, observer, inject } from 'mobx-react';
/* import DevTools from 'mobx-react-devtools';*/

import routes from './routes';

import patientsStore  from './patients/store';

import { observable } from 'mobx';

// Needed for React Developer Tools
window.React = React;

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

useStrict(true);

ReactDOM.render(
  <Provider patientsStore={patientsStore} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
