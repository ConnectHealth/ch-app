// @flow
import { OrderedMap } from 'immutable';

import type { Patient, Action } from './actions';

const uuid = () => Math.floor(Math.random() * 100000);

const patientMap = new OrderedMap();

// FIXME - get from sagas
// Please consider carefully, is it necessary to have the whole
// state object in immutable collection, especially if you will
// use reselect in the future.
const initialState = patientMap;

export default function patients(state: OrderedMap<string, Patient> = initialState, action: Action) {
  switch (action.type) {
    case 'CREATE': {
      return state.set(uuid(), {
        patient: action.patient,
      });
    }
    case 'SEARCH_SUCCESS': {
      return action.patients.reduce(
        (newState, next) => newState.set(uuid(), next),
        initialState
      );
    }
    case 'SEARCH_ERROR': {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
