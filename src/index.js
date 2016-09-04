// @flow
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, browserHistory } from 'react-router';
import { useStrict } from 'modx';
import { Provider } from 'modx-react';
import DevTools from 'mobx-react-devtools';

import routes from './routes';

import { patientStore } from './patients/store';


// Needed for React Developer Tools
window.React = React;

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

useStrict(true);

ReactDOM.render(
  <Provider patientStore={patientStore}>
    <Router history={browserHistory} routes={routes} />
    <DevTools />
  </Provider>,
  document.getElementById('root')
);
