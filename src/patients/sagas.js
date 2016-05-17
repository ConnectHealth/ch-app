import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
// import * as request from 'superagent';

import { actionTypes as actions } from './constants';

// TODO - move this to api.js
const getRequest = () => new Promise((resolve) => {
  const response = {
    patients: [
      {
        firstName: 'John',
        lastName: 'Smith',
      },
      {
        firstName: 'Sarah',
        lastName: 'Brown',
      },
    ],
  };

  // Faked the AJAX request
  window.setTimeout(() => {
    resolve(response);
  }, Math.random() * 1000);
});

function * getPatients() {
  try {
    yield put({ type: actions.SEARCHING });
    const { patients } = yield call(getRequest);
    yield put({ type: actions.SEARCH_SUCCESS, patients });
  } catch (error) {
    yield put({ type: actions.SEARCH_ERROR, error });
  }
}

// Search Patients whenever receive a SEARCH action
function * watchPatients() {
  yield* takeEvery(actions.SEARCH, getPatients);
}

export default [
  watchPatients,
];

