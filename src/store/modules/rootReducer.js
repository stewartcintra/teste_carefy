import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import tasks from './tasks/reducer';

export default combineReducers({
  auth,
  user,
  tasks,
});
