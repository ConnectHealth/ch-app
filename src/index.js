// @flow
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
/* import injectTapEventPlugin from 'react-tap-event-plugin';*/
import { useStrict } from 'mobx';
/* import DevTools from 'mobx-react-devtools';*/

import App from 'app/App';

// Needed for React Developer Tools
window.React = React;

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
/* injectTapEventPlugin();*/

useStrict(true);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
