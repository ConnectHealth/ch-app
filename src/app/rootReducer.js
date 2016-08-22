// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { appName, appReducers } from '../app';
import { patientsName, patientsReducer } from '../patients';

const rootReducer = combineReducers({
  [appName]: appReducers.app,
  [patientsName]: patientsReducer,
  routing: routerReducer,
});

export default rootReducer;
