// @flow
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './app/App';
import stores from './stores';
import PatientsMain from './patients/Main';

const patientsMain = () => <PatientsMain stores={stores} />;

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={patientsMain} />
    <Route path="/person/:id" component={patientsMain} />
  </Route>
);

export default routes;
