// @flow
import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './app/App';

import PatientsMain from './patients/Main';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={PatientsMain} />
    <Route path="/person/:id" component={PatientsMain} />
  </Route>
);

export default routes;
