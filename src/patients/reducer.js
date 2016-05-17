import { actionTypes as t } from './constants';
import { OrderedMap } from 'immutable';

const uuid = () => Math.floor(Math.random() * 100000);

const patientMap = new OrderedMap();

// FIXME - get from sagas
// Please consider carefully, is it necessary to have the whole
// state object in immutable collection, especially if you will
// use reselect in the future.
const initialState = patientMap;

export default function patients(state = initialState, action) {
  switch (action.type) {
    case t.ADD: {
      return state.set(uuid(), {
        text: action.text,
      });
    }
    case t.SEARCH_SUCCESS: {
      return action.patients.reduce(
        (newState, next) => newState.set(uuid(), next),
        initialState
      );
    }
    case t.SEARCH_ERROR: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
