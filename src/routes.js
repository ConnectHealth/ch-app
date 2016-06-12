import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './app/App';

import patients from './patients';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={patients.MainSection} />
  </Route>
    // <Route path="/person/:id" component={patient.MainSection} />
);

export default routes;
