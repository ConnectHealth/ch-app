import { createStore } from 'redux';
import rootReducer from '../layout/reducer';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../layout/reducer', () => {
      const nextReducer = require('../layout/reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
