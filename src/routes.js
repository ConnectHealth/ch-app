// @flow
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './app/App';
import RootStore from './stores';
import PatientMain from './patients/Main';

const rootStore = new RootStore();

const patientMain = () => <PatientMain patientStore={rootStore.patientStore} />;

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={patientMain} />
    <Route path="/person/:id" component={patientMain} />
  </Route>
);

export default routes;
