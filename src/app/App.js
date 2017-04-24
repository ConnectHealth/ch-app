// @flow
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import theme from 'theme';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { syncHistoryWithStore } from 'mobx-react-router';

import Stores from 'app/stores';
import PatientsMain from 'patients/Main';

import '../main.css';

const style = {
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const stores = new Stores();

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routerStore);

const patientsMain = () => <PatientsMain patientStore={stores.patientStore} />;

const { prepareStyles } = theme;

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <Router history={history}>
      <div>
        <AppBar title={'Test me'} />
        <div style={prepareStyles(style.container)}>
          <Route path="/" component={patientsMain} />
          <Route path="/person/:id" component={patientsMain} />
        </div>
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
