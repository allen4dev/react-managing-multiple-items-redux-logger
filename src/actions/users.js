import { normalize } from 'normalizr';

import * as actionTypes from './types';
import { userListSchema } from './schemas';

import api from './../api';

// Action creators
export function setUsers(users) {
  return {
    type: actionTypes.SET_USERS,
    payload: users,
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
