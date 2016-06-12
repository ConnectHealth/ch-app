import { actions, actionTypes } from './actions';
import { reducers } from './reducers';

import App from './App';

export const name = 'app';

export default {
  name,
  actionTypes,
  actions,
  reducers,
  App,
};
