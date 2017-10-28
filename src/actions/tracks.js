import * as actionTypes from './types';

// Action creators
export function setTracks(tracks) {
  return {
    type: actionTypes.SET_TRACKS,
    payload: tracks,
  };
}
// Async actions
