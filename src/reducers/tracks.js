import { combineReducers } from 'redux';

import * as actionTypes from './../actions/types';

const INITIAL_STATE = {
  entities: {},
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  if (action.type === actionTypes.SET_TRACKS) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return state;
}

const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
