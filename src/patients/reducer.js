// @flow
import { Map, OrderedMap } from 'immutable';

import type { Patient, Action } from './actions';

const uuid = () => Math.floor(Math.random() * 100000).toString();

type State = Map<string, Patient>;

const initialState: State = new OrderedMap();

export default function patients(state: State = initialState, action: Action): State {
  switch (action.type) {
    case 'CREATE': {
      return state.set(uuid(), action.patient);
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
