import { combineReducers } from 'redux';

import customers from './customers';
import exercises from './exercises';

export default combineReducers({
  customers,
  exercises,
});
