import { normalize } from 'normalizr';

import * as actionTypes from './types';
import { userListSchema, trackListSchema } from './schemas';

import api from './../api';

import * as tracks from './tracks';

// Action creators
export function setUsers(users) {
  return {
    type: actionTypes.SET_USERS,
    payload: users,
  };
}

export function setTracks(id, result) {
  return {
    type: actionTypes.SET_USER_TRACKS,
    payload: { id, result },
  };
}

// Async actions
export function searchUsers(term) {
  return async dispatch => {
    const results = await api.users.searchUsers(term);
    const response = normalize(results, userListSchema);

    dispatch(setUsers(response.entities.users));

    return response.entities.users;
  };
}

export function fetchUserTracks(id) {
  return async dispatch => {
    const results = await api.users.getUserTracks(id);
    const response = normalize(results, trackListSchema);

    dispatch(tracks.setTracks(response.entities.tracks));
    dispatch(setTracks(id, response.result));

    return response.entities.tracks;
  };
}
