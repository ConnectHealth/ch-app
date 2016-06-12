import { actionTypes } from './actions';

const defaults = {
  title: 'Connect Health',
};

function app(state = defaults, action) {
  switch (action.type) {
    case actionTypes.updateTitle: {
      return {
        title: action.payload.text,
      };
    }
    default: {
      return state;
    }
  }
}

const reducers = {
  app,
};

export {
  reducers,
};
