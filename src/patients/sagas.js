// @flow
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

// import { actionTypes as actions } from './actions';

const api = () => new Promise((resolve) => {
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

function * getPatients(): Iterable<*> {
  try {
    yield put({ type: 'SEARCHING' });
    const { patients } = ((yield call(api)): any);
    yield put({ type: 'SEARCH_SUCCESS', patients });
  } catch (error) {
    yield put({ type: 'SEARCH_ERROR', error });
  }
}

// Search Patients whenever receive a SEARCH action
function * watchPatients(): Iterable<*> {
  yield* takeEvery('SEARCH', getPatients);
}

export default [
  watchPatients,
];

