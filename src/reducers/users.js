import { combineReducers } from 'redux';

import * as actionTypes from './../actions/types';

const INITIAL_STATE = {
  entities: {},
  tracks: {},
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.SET_USERS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

function tracksReducer(state = INITIAL_STATE.tracks, action = {}) {
  switch (action.type) {
    case actionTypes.SET_USER_TRACKS:
      return {
        ...state,
        [action.payload.id]: action.payload.result,
      };

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
  tracks: tracksReducer,
});

export default reducer;
