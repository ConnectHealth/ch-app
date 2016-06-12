import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from '../app';
import patients from '../patients';

const rootReducer = combineReducers({
  [app.name]: app.reducers.app,
  [patients.name]: patients.reducer,
  routing: routerReducer,
});

export default rootReducer;
