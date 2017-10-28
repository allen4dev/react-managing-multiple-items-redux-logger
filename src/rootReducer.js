import { combineReducers } from 'redux';

import tracks from './reducers/tracks';
import users from './reducers/users';

const rootReducer = combineReducers({
  tracks,
  users,
});

export default rootReducer;
