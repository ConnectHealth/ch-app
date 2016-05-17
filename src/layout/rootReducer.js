import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import patients from '../patients';

const rootReducer = combineReducers({
  [patients.NAME]: patients.reducer,
  routing: routerReducer,
});

export default rootReducer;
