// @flow
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import type { Patient } from './actions';

const api = (): Promise<Array<Patient>> => new Promise((resolve) => {
  const response: Array<Patient> =
    [
      {
        firstName: 'John',
        lastName: 'Smith',
      },
      {
        firstName: 'Sarah',
        lastName: 'Brown',
      },
    ];

  window.setTimeout(() => {
    resolve(response);
  }, Math.random() * 1000);
});

function* getPatients(): Iterable<*> {
  try {
    yield put({ type: 'SEARCHING' });
    const { patients } = ((yield call(api)): any);
    yield put({ type: 'SEARCH_SUCCESS', patients });
  } catch (error) {
    yield put({ type: 'SEARCH_ERROR', error });
  }
}

// Search Patients whenever receive a SEARCH action
function* watchPatients(): Iterable<*> {
  yield* takeEvery('SEARCH', getPatients);
}

export default [
  watchPatients,
];

